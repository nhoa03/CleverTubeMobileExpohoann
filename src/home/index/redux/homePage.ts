import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IInitialState, IVideoTypeCarousel } from "../interfaces";
import { VIDEO_LIST } from "@/mocks/homePage";

const initialState: IInitialState = {
  videoTypeCarousel: [],
  videoList: VIDEO_LIST,
  podcastTypeCarousel: [],
  saveRecentVideoAndPodcast: [],
  hasRedirected: false,
};

export const homePage = createSlice({
  name: "home-page",
  initialState,
  reducers: {
    receiveTopicsVideo: (
      state,
      action: PayloadAction<IVideoTypeCarousel[]>
    ) => {
      state.videoTypeCarousel = action.payload;
    },

    receiveTopicsPodcast: (
      state,
      action: PayloadAction<IVideoTypeCarousel[]>
    ) => {
      state.podcastTypeCarousel = action.payload;
    },

    selectOnlyOneTypeVideo: (state, action: PayloadAction<string>) => {
      state.videoTypeCarousel = state.videoTypeCarousel.map((item) => {
        const isSelected = item.key === action.payload;
        item.isSelected = isSelected;
        item.bgColor = isSelected ? "#3D9BE0" : "#FFFFFF";
        item.color = isSelected ? "#FFFFFF" : "#3D9BE0";
        return item;
      });
    },

    setHasRedirectedAuth: (state, action: PayloadAction<boolean>) => {
      state.hasRedirected = action.payload;
    },

    selectOnlyOneTypePodcast: (state, action: PayloadAction<string>) => {
      state.podcastTypeCarousel = state.podcastTypeCarousel.map((item) => {
        const isSelected = item.key === action.payload;
        item.isSelected = isSelected;
        item.bgColor = isSelected ? "#3D9BE0" : "#FFFFFF";
        item.color = isSelected ? "#FFFFFF" : "#3D9BE0";
        return item;
      });
    },

    getRecentVideoAndPodcast: (
      state,
      action: PayloadAction<IVideoTypeCarousel>
    ) => {
      state.saveRecentVideoAndPodcast.unshift(action.payload);
    },
  },
});

export const {
  setHasRedirectedAuth,
  selectOnlyOneTypeVideo,
  receiveTopicsVideo,
  receiveTopicsPodcast,
  selectOnlyOneTypePodcast,
  getRecentVideoAndPodcast,
} = homePage.actions;

export const reducer = homePage.reducer;
