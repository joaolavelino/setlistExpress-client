import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
    song: {},
    isLoading: true,
    error: {
      status: false,
      error: "",
    },
  },
  reducers: {
    indexSongs(state, action) {
      return {
        ...state,
        songs: action.payload,
        isLoading: false,
      };
    },
    songInfo(state, action) {
      return {
        ...state,
        song: action.payload,
        isLoading: false,
      };
    },
    songFetchError(state, action) {
      return {
        ...state,
        isLoading: false,
        error: {
          status: true,
          error: action.payload,
        },
      };
    },
    songLoading(state) {
      return {
        ...state,
        isLoading: true,
      };
    },
  },
});

export const { indexSongs, songInfo, songFetchError, songLoading } =
  songsSlice.actions;

export default songsSlice.reducer;
