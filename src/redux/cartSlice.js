/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleAdding: (state, action) => {
      if (state.id.includes(action.payload)) {
        state.id = state.id.filter((id) => id !== action.payload);
      } else {
        state.id.push(action.payload);
      }
    },
  },
});

export const { toggleAdding } = cartSlice.actions;

export default cartSlice.reducer;
