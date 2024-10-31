import { configureStore } from "@reduxjs/toolkit";
import  userdataSlice  from "./src/Slice/UserSlice";

export const store = configureStore({
  reducer: {
    userinfo: userdataSlice,
  },
});
