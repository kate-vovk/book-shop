/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleAdding: (state, action) => {
      const idArray = state.cart.map((item) => item.id);
      if (idArray.includes(action.payload.id)) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        state.cart.push(action.payload);
      }
    },
  },
});

export const { addToCart, removeFromCart, toggleAdding } = cartSlice.actions;

export default cartSlice.reducer;
