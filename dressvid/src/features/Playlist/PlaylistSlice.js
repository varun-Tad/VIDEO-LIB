import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullPlaylist: [],
  addedVideos: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    createPlaylist: (state, action) => {
      if (!action.payload.length) {
        alert("Enter a valid playlist name");
      } else if (state.fullPlaylist.find((ele) => ele === action.payload)) {
        alert("Playlist already exists");
      } else {
        state.fullPlaylist.push(action.payload);
        state[action.payload] = [];
      }
    },
    AddtoPlaylist: (state, action) => {
      if (state[action.payload.item] && state[action.payload.item].length > 0) {
        if (
          state[action.payload.item].find(
            (thing) => thing.id === action.payload.selectedVd.id
          )
        ) {
          alert("video already exists in playlist");
        } else {
          state[action.payload.item].push(action.payload.selectedVd);
          state.addedVideos.push(action.payload.selectedVd);
        }
      } else {
        // state[action.payload.item] = [];
        state[action.payload.item].push(action.payload.selectedVd);
        state.addedVideos.push(action.payload.selectedVd);
      }
    },
    DeleteaPlaylist: (state, action) => {
      state.fullPlaylist = state.fullPlaylist.filter(
        (ele) => ele !== action.payload
      );

      for (const val of state[action.payload]) {
        state.addedVideos = state.addedVideos.filter(
          (item) => item.id !== val.id
        );
      }

      delete state[action.payload];
    },
    DeleteAVideoFromPlay: (state, action) => {
      state[action.payload.playid] = state[action.payload.playid].filter(
        (item) => item.id !== action.payload.ele.id
      );
      state.addedVideos = state.addedVideos.filter(
        (item) => item.id !== action.payload.ele.id
      );
    },
  },
});

export default playlistSlice.reducer;
export const {
  createPlaylist,
  AddtoPlaylist,
  DeleteaPlaylist,
  DeleteAVideoFromPlay,
} = playlistSlice.actions;
