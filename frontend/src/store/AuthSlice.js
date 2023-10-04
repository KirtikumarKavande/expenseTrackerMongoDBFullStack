import { createSlice } from "@reduxjs/toolkit";

const authState = { isSignup: true };
const AuthSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    toggleAuth(state, action) {
      state.isSignup = action.payload;
    },
  },
});

export const toggleAuthAction=AuthSlice.actions.toggleAuth

export default AuthSlice;
