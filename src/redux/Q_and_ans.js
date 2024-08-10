import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUser_token: (state, action) => {
      state.user_token = action.payload;
    },
  },
});
export const {} = globalSlice.actions;
export default globalSlice.reducer;
