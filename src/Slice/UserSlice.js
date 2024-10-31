import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
};

export const userdataSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    userdata: (state ,action) => {
      state.value = action.payload
    },
  
  },
});

// Action creators are generated for each case reducer function
export const { userdata } = userdataSlice.actions;

export default userdataSlice.reducer;
