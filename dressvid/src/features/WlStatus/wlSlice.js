import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchedLaterNums: [],
};

const exploreSlice = createSlice({
  name: "exploreStatus",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.watchedLaterNums.push(action.payload);
    },
    removeSetStatus: (state, action) => {
      console.log("action.paylaod", action.payload);
      state.watchedLaterNums = state.watchedLaterNums.filter(
        (num) => num !== action.payload
      );
    },
  },
});

export default exploreSlice.reducer;
export const { setStatus, removeSetStatus } = exploreSlice.actions;
