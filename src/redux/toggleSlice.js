import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    mobileNav: false,
    authForm: "login",
  },
  reducers: {
    openMobileNav(state) {
      return {
        ...state,
        mobileNav: true,
      };
    },
    closeMobileNav(state) {
      return {
        ...state,
        mobileNav: false,
      };
    },
    toggleMobileNav(state) {
      return {
        ...state,
        mobileNav: !state.mobileNav,
      };
    },
    authFormToggle(state, action) {
      return {
        ...state,
        authForm: action.payload,
      };
    },
  },
});

export const {
  openMobileNav,
  closeMobileNav,
  toggleMobileNav,
  authFormToggle,
} = toggleSlice.actions;

export default toggleSlice.reducer;
