import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  LikedNums: [],
};

const LikeSlice = createSlice({
  name: "likeStatus",
  initialState,
  reducers: {
    setLikeStatus: (state, action) => {
      state.LikedNums.push(action.payload);
    },
    removeLikeSetStatus: (state, action) => {
      state.LikedNums = state.LikedNums.filter((num) => num !== action.payload);
    },
  },
});

export default LikeSlice.reducer;
export const { setLikeStatus, removeLikeSetStatus } = LikeSlice.actions;
