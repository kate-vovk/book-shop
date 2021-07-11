/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  id: [],
  itemAmount: {},
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.itemAmount[action.payload] += 1;
    },
    decrement: (state, action) => {
      if (state.itemAmount[action.payload] === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
        state.id = state.id.filter((item) => item !== action.payload);
        delete state.itemAmount[action.payload];
      } else {
        state.itemAmount[action.payload] -= 1;
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      state.id = state.id.filter((item) => item !== action.payload);
      delete state.itemAmount[action.payload];
    },
    toggleAdding: (state, action) => {
      const cartIds = state.cart.map((item) => item.id);
      if (cartIds.includes(action.payload.id)) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        state.cart.push(action.payload);
      }
      state.id = state.cart.map((item) => item.id);
      state.id.forEach((item) => {
        state.itemAmount[item] = 1;
      });
    },
  },
});

export const { increment, decrement, removeFromCart, toggleAdding } =
  cartSlice.actions;

export default cartSlice.reducer;
