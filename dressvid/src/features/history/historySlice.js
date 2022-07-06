import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  historySelected: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistory: (state, action) => {
      const selectedVal = state.historySelected.find(
        (ele) => ele.id === action.payload.id
      );

      if (!selectedVal) {
        state.historySelected.push(action.payload);
      }
    },
    removeHistory: (state, action) => {
      state.historySelected = state.historySelected.filter(
        (option) => option.id !== action.payload.id
      );
    },
    clearHistory: (state) => {
      state.historySelected = [];
    },
  },
});

export default historySlice.reducer;
export const { addHistory, removeHistory, clearHistory } = historySlice.actions;
