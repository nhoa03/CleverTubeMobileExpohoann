import { resetStateAuth, setIsLoggedIn, updateFirIdToken } from "@/auth/slice";
import store from "@/common/redux/store";
// import { navigate } from "@/common/utils/common.utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import axios from "axios";
import { LoginAuthAPI } from "../../../auth/api/authAPI";
// import { AUTH } from '../../constants/route.constants';
// import { envData } from '../../constants/envData';

const axiosClient = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "Application/json",
  },
  // paramsSerializer: param => toQueryString(param),
  // baseURL: envData.BASE_URL,
  baseURL: "https://clt-prod.api.bilisoftware.com/api",
  // baseURL: 'http://10.0.2.2:5000/api',
  timeout: 10000,
});

axiosClient.interceptors.request.use(async (config) => {
  try {
    const tokenValue = await AsyncStorage.getItem("token_App");
    if (tokenValue) {
      (config.headers as any).Authorization = `Bearer ${tokenValue}`;
    }
  } catch (error) {
    console.error("Error retrieving token from AsyncStorage:", error);
  }
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    console.log("Response received:", response);
    return response;
  },
  async (error) => {
    if (
      error.response.status === 401 ||
      error?.response?.data?.debugInfo?.response?.statusCode === 401 ||
      error.response?.data?.statusCode === 401 ||
      error.response?.data?.message === "Please login!!!"
    ) {
      const currentUserIdToken = await auth().currentUser?.getIdToken(true);
      if (currentUserIdToken) {
        store.dispatch(updateFirIdToken(currentUserIdToken));
        await AsyncStorage.setItem("token_App", currentUserIdToken);
        await LoginAuthAPI(currentUserIdToken).then(() => {
          store.dispatch(setIsLoggedIn(true));
        });
        return;
      }
      store.dispatch(resetStateAuth());
      await AsyncStorage.removeItem("token_app");
      await GoogleSignin.revokeAccess();
      await auth().signOut();
      // navigate(AUTH);
    }
    return Promise.reject(error.response);
  }
);

export { axiosClient };
