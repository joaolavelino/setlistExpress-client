import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
    error: {
      status: false,
      message: "",
    },
  },
  reducers: {
    userLogin(state, action) {
      return {
        user: action.payload.user,
        token: action.payload.token,
        error: {
          status: false,
          message: "",
        },
      };
    },
    userLogout(state) {
      return {
        user: null,
        token: null,
        error: {
          status: false,
          message: "",
        },
      };
    },
    userError(state, action) {
      return {
        ...state,
        error: {
          status: true,
          message: action.payload.message,
        },
      };
    },
    userErrorClear(state, action) {
      return {
        ...state,
        error: {
          status: false,
          message: "",
        },
      };
    },
  },
});

export const { userLogin, userLogout, userError, userErrorClear } =
  userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
