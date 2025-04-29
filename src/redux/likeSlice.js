import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likes: 0,
};

const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    increment: (state) => state.likes++,
    decrement: (state) => state.likes--,
  },
});

export const { increment, decrement } = likeSlice.actions;
export default likeSlice.reducer;
