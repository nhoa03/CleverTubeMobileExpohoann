import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { reducer as videoDetails } from '@/z-video-details/reducer/videoDetails';
// import { reducer as podcastList } from '@/home/podcast/reducer/podcastList';
import { reducer as homePage } from "@/home/index/redux/homePage";
import { reducer as authReducer } from "@/auth/slice";
// import { reducer as topicReducer } from "@/level-topic/slice";
// import { reducer as videoList } from "@c/home/video/reducer/videoList";
// import { reducer as videoReducer } from "@/home/video/slice";
// import { reducer as videoItemReducer } from "@/video-detail/playingVideo/slice";
// import { reducer as playerVideo } from "@/video-detail/playingVideo/slice/playerVideo.slice";
// import { reducer as podcastDetail } from "@/podcast-detail/reducer/podcastDetail";
import { reducer as accountReducer } from "@/account/slice";
// import { reducer as wWosearchPageReducer } from "@/search-page/search.slice";
// import { reducer as saveNerdReducer } from "@/save-new-word/reducer/saveNewWord";
// import { reducer as countDownForPreparingGame } from "@/game/count-down-screen/reducer/countDown";
// import { reducer as gameChooseRightWordReducer } from "@/game/choose-right-word-game/reducer/gameChooseRightWord";
// import { reducer as gameDragWordReducer } from "@/game/drag-word-game/reducer/gameDragWord";
// import updateAccountReducer from "@/update-account/slice";
import { reducer as rootConfigSliceReducer } from "@/common/redux/rootConfigSlice";
// import { reducer as folderWordReducer } from "@/folder-word/slice";
// import { reducer as diamondReducer } from '@/diamonds/reducer/diamondSlice';
// import { reducer as gameListReducer } from '@/game/game-list-screen/reducer/gameList';
// import { reducer as gameFlashCardReducer } from '@c/game/game-flash-card/slice';
// import { reducer as gameShuffleSentenceReducer } from '@clvtube/game/game-shuffle/game-shuffle-sentence/slice';
// import { reducer as gameShuffleWordReducer } from '@clvtube/game/game-shuffle/game-shuffle-word/slice';
// import { reducer as podcastListWithTopicReducer } from '@clvtube/podcast-list-with-topic/podcastListWithTopic.slice';
// import { reducer as reviewVocabReducer } from "@/learn-vocab/slice";
// import { reducer as ratingReducer } from "@/rating/common/redux/index";
// import { reducer as socialReducer } from "@/social/common/redux/socialReducer";
// import { reducer as postCreate } from "@/social/common/redux/postCreateReducer";

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
  //   videoList,
  //   videoReducer,
  //   videoItemReducer,
  //   podcastDetail,
  // searchPageReducer,
  //   saveNewWordReducer,
  //   countDownForPreparingGame,
  //   gameChooseRightWordReducer,
  //   gameDragWordReducer,
  //   diamondReducer,
  //   updateAccountReducer,
  rootConfigSliceReducer,
  //   folderWordReducer,
  //   playerVideo,
  //   gameListReducer,
  //   gameFlashCardReducer,
  //   gameShuffleSentenceReducer,
  //   gameShuffleWordReducer,
  //   podcastListWithTopicReducer,
  //   reviewVocabReducer,
  //   ratingReducer,
  //   socialReducer,
  //   postCreate,
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
