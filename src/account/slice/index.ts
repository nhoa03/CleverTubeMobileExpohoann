import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  avatar: "",
  avatarId: NaN,
  fullname: "",
  phone: "",
  email: "",
  level: "",
  point: 0,
  plan: "",
  planId: 0,
  totalDiamonds: 0,
};

const accountSlice = createSlice({
  name: "accountUser",
  initialState,
  reducers: {
    updateAccountUser: (state, action) => {
      state.avatar = action.payload.avatar;
      state.avatarId = action.payload.avatarId;
      state.fullname = action.payload.fullname;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.level = action.payload.level;
      state.point = action.payload.point;
      state.plan = action.payload.plan;
      state.planId = action.payload.planId;
      state.totalDiamonds = action.payload.totalDiamonds;
    },
    updateTotalDiamonds: (state, action) => {
      state.totalDiamonds = action.payload;
    },
  },
});

export const {
  actions: { updateAccountUser, updateTotalDiamonds },
  reducer,
} = accountSlice;
