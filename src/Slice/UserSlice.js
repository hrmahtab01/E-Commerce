import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const userdataSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    userdata: (state ,actions) => {
      state.value = actions.payload
    },
  
  },
});

// Action creators are generated for each case reducer function
export const { userdata } = userdataSlice.actions;

export default userdataSlice.reducer;
