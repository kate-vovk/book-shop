/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  id: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleAdding: (state, action) => {
      const cartIds = state.cart.map((item) => item.id);
      if (cartIds.includes(action.payload.id)) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        state.cart.push(action.payload);
      }
      state.id = state.cart.map((item) => item.id);
    },
  },
});

export const { addToCart, removeFromCart, toggleAdding } = cartSlice.actions;

export default cartSlice.reducer;
