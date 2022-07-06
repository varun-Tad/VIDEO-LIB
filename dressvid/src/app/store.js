import { configureStore } from "@reduxjs/toolkit";
import exploreReducer from "../features/explore/exploreSlice";
import watchLaterReducer from "../features/watchLater/watchLaterSlice";
import statusReducer from "../features/WlStatus/wlSlice";
import historyReducer from "../features/history/historySlice";
import likeDislikeReducer from "../features/LikeDislike/LikeDislikeSlice";
import statusLikeReducer from "../features/LikeStatus/LikeSlice";

export const store = configureStore({
  reducer: {
    explore: exploreReducer,
    watchLater: watchLaterReducer,
    statusLater: statusReducer,
    history: historyReducer,
    likeDislike: likeDislikeReducer,
    statusLike: statusLikeReducer,
  },
});
