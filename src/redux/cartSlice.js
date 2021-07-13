/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import HTTPService from "../services/HTTPService";

const initialState = {
  id: [],
  itemAmount: {},
  checkout: false,
};

export const sendData = createAsyncThunk(
  "cart/sendData",
  async (itemAmount) => {
    const cart = [];
    let sentObject = {};
    Object.entries(itemAmount).forEach(([key, value]) => {
      sentObject[key] = value;
      cart.push(sentObject);
      sentObject = {};
    });
    return HTTPService.post(
      "https://run.mocky.io/v3/0f2762f5-6813-4478-aa22-e32f47a9dd36",
      { cart }
    );
  }
);
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.itemAmount[action.payload] += 1;
    },
    decrement: (state, action) => {
      if (state.itemAmount[action.payload] === 1) {
        state.id = state.id.filter((item) => item !== action.payload);
        delete state.itemAmount[action.payload];
      } else {
        state.itemAmount[action.payload] -= 1;
      }
    },
    removeFromCart: (state, action) => {
      state.id = state.id.filter((item) => item !== action.payload);
      delete state.itemAmount[action.payload];
    },
    toggleAdding: (state, action) => {
      if (state.id.includes(action.payload)) {
        state.id = state.id.filter((id) => id !== action.payload);
      } else {
        state.id.push(action.payload);
      }
      state.id.forEach((item) => {
        state.itemAmount[item] = 1;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendData.fulfilled, (state) => {
        state.id = [];
        state.itemAmount = {};
        state.checkout = true;
      })
      .addCase(sendData.rejected, () => {
        console.log("sendData is rejected");
      });
  },
});

export const { increment, decrement, removeFromCart, toggleAdding } =
  cartSlice.actions;

export default cartSlice.reducer;
