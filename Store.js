import { configureStore } from "@reduxjs/toolkit";
import userdataSlice from "/src/Slice/UserSlice.js"; 

export const store = configureStore({
  reducer: {
    userinfo: userdataSlice,
  },
});
