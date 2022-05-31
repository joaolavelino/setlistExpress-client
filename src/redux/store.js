import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import songsReducer from "./songsSlice";
import toggleReducer from "./toggleSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    songs: songsReducer,
    toggle: toggleReducer,
  },
});
