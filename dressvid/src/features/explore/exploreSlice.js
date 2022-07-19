import { createSlice } from "@reduxjs/toolkit";
import { exploreData } from "../../routes/Explorepage/explore.data";

const initialState = {
  exploreOptions: [...exploreData],
  selectedExploreOptions: [...exploreData],
  existingOptions: [...exploreData],
};

const exploreSlice = createSlice({
  name: "explore",
  initialState,
  reducers: {
    OptionsFilter: (state, action) => {
      state.selectedExploreOptions = state.exploreOptions.filter(
        (option) => option.category === action.payload
      );
      state.existingOptions = state.selectedExploreOptions;
    },
    AllFilter: (state) => {
      state.selectedExploreOptions = state.exploreOptions;
      state.existingOptions = state.selectedExploreOptions;
    },
    SearchFilter: (state, action) => {
      state.selectedExploreOptions = state.existingOptions.filter((option) =>
        option.name
          .toLocaleLowerCase()
          .includes(action.payload.toLocaleLowerCase())
      );
    },
  },
});

export default exploreSlice.reducer;
export const { OptionsFilter, AllFilter, SearchFilter } = exploreSlice.actions;
