import { configureStore } from "@reduxjs/toolkit";
import exploreReducer from "../features/explore/exploreSlice";
import watchLaterReducer from "../features/watchLater/watchLaterSlice";
import statusReducer from "../features/WlStatus/wlSlice";

export const store = configureStore({
  reducer: {
    explore: exploreReducer,
    watchLater: watchLaterReducer,
    statusLater: statusReducer,
  },
});
