import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserAccount } from "../interfaces/index";

const initialState: IUserAccount = {
  phone: "",
  email: "",
  fullname: "",
  firIdToken: "",
  isTypeAuthPhone: false,
  tokenApp: "",
  phoneNumber: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAccountWithAuth: (state: IUserAccount, action: any) => {
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.fullname = action.payload.fullname;
      state.firIdToken = action.payload.firIdToken;
      state.isTypeAuthPhone = action.payload.isTypeAuthPhone;
    },
    getTokenApp: (state, action) => {
      state.tokenApp = action.payload;
    },
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    getPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    resetStateAuth: (state) => {
      state.email = initialState.email;
      state.firIdToken = initialState.firIdToken;
      state.fullname = initialState.fullname;
      state.isTypeAuthPhone = initialState.isTypeAuthPhone;
      state.phone = initialState.phone;
      state.phoneNumber = initialState.phoneNumber;
      state.tokenApp = initialState.tokenApp;
      state.isLoggedIn = initialState.isLoggedIn;
    },
    updateFirIdToken: (state, action) => {
      state.firIdToken = action.payload;
    },
  },
});

export const {
  actions: {
    updateAccountWithAuth,
    getTokenApp,
    getPhoneNumber,
    resetStateAuth,
    setIsLoggedIn,
    updateFirIdToken,
  },
  reducer,
} = authSlice;
