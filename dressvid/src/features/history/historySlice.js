import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  historySelected: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistory: (state, action) => {},
    removeHistory: (state, action) => {},
  },
});

export default historySlice.reducer;
export const { addHistory, removeHistory } = historySlice.actions;
