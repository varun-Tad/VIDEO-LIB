import { createSlice } from "@reduxjs/toolkit";
import { exploreData } from "../../routes/Explorepage/explore.data";

const initialState = {
  exploreOptions: [...exploreData],
  selectedExploreOptions: [...exploreData],
};

const exploreSlice = createSlice({
  name: "explore",
  initialState,
  reducers: {
    OptionsFilter: (state, action) => {
      state.selectedExploreOptions = state.exploreOptions.filter(
        (option) => option.category === action.payload
      );
    },
    AllFilter: (state) => {
      state.selectedExploreOptions = state.exploreOptions;
    },
  },
});

export default exploreSlice.reducer;
export const { OptionsFilter, AllFilter } = exploreSlice.actions;
