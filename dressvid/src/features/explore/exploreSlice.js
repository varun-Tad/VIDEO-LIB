import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { exploreData } from "../../routes/Explorepage/explore.data";
import axios from "axios";

const initialState = {
  // exploreOptions: [...exploreData],
  exploreOptions: [],
  // selectedExploreOptions: [...exploreData],
  // existingOptions: [...exploreData],
  selectedExploreOptions: [],
  existingOptions: [],
  loading: false,
  error: "",
};

export const fetchVideos = createAsyncThunk("explore/fetchVideos", async () => {
  const response = await axios.get("/api/videos");
  console.log(response.data.videos);
  return response.data.videos;
});

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
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.loading = false;
      state.exploreOptions = action.payload;
      state.existingOptions = action.payload;
      state.selectedExploreOptions = action.payload;
      state.error = "";
    });
    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.loading = false;
      state.exploreOptions = [];
      state.error = action.error.message;
    });
  },
});

export default exploreSlice.reducer;
export const { OptionsFilter, AllFilter, SearchFilter } = exploreSlice.actions;
