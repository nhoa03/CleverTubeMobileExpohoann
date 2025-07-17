import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { reducer as homePage } from "@/home/index/redux/homePage";
import { reducer as authReducer } from "@/auth/slice";
import { reducer as accountReducer } from "@/account/slice";
// import { reducer as wWosearchPageReducer } from "@/search-page/search.slice";
// import updateAccountReducer from "@/update-account/slice";
import { reducer as rootConfigSliceReducer } from "@/common/redux/rootConfigSlice";

import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const persistConfig = {
  key: "clever-tube",
  storage: AsyncStorage,
  whitelist: ["rootConfigSliceReducer", "authReducer", "ratingReducer"],
};

const rootReducer = combineReducers({
  //   videoDetails,
  //   podcastList,
  // topicReducer,
  homePage,
  authReducer,
  accountReducer,
  rootConfigSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
