import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
  likeSelected: [],
};

useEffect(() => {
  console.log("yes");
});

const LikeDislikeSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    addLiked: (state, action) => {
      state.likeSelected.push(action.payload);
    },
    removedLiked: (state, action) => {
      state.likeSelected = state.likeSelected.filter(
        (option) => option.id !== action.payload.id
      );
    },
  },
});

export default LikeDislikeSlice.reducer;
export const { addLiked, removedLiked } = LikeDislikeSlice.actions;
