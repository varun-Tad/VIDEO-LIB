import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchLaterSelected: [],
};

const watchLaterSlice = createSlice({
  name: "watchLater",
  initialState,
  reducers: {
    addWatchLater: (state, action) => {
      action.payload = { ...action.payload, watchLaterExists: true };
      state.watchLaterSelected.push(action.payload);
    },
    removeWatchLater: (state, action) => {
      state.watchLaterSelected = state.watchLaterSelected.filter(
        (option) => option.id !== action.payload.id
      );
    },
  },
});

export default watchLaterSlice.reducer;
export const { addWatchLater, removeWatchLater } = watchLaterSlice.actions;
