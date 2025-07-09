import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICommonVideoScreenState } from "../interface";

const initialState: ICommonVideoScreenState = {
  topics: [],
  topicPicking: "All",
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    updateTopicsData: (state, action) => {
      state.topics = action.payload?.map((item: any) => {
        return { ...item, isSelected: false };
      });
    },
    setTopicsPicking: (state, action: PayloadAction<string>) => {
      if (state.topicPicking === action.payload) {
        state.topicPicking = "All";
        return;
      }
      state.topicPicking = action.payload;
    },
  },
});

export const {
  actions: { updateTopicsData, setTopicsPicking },
  reducer,
} = videoSlice;
