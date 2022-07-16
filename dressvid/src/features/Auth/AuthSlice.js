import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  userStatus: false,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      //   UserFetch();
      state.currentUser = action.value;
    },
    changeUserStatus: (state) => {
      state.userStatus = !state.userStatus;
    },
  },
});

export default authSlice.reducer;
export const { addUser, changeUserStatus } = authSlice.actions;
