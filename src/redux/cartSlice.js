/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import HTTPService from "../services/HTTPService";

const initialState = {
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
    return HTTPService.post("/data", { cart });
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
        delete state.itemAmount[action.payload];
      } else {
        state.itemAmount[action.payload] -= 1;
      }
    },
    removeFromCart: (state, action) => {
      delete state.itemAmount[action.payload];
    },
    toggleAdding: (state, action) => {
      if (
        Object.keys(state.itemAmount)
          .map((id) => Number(id))
          .includes(action.payload)
      ) {
        delete state.itemAmount[action.payload];
      } else {
        state.itemAmount[action.payload] = 1;
      }
    },
    toggleCheckout: (state) => {
      state.checkout = !state.checkout;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendData.fulfilled, (state) => {
        state.itemAmount = {};
        state.checkout = true;
      })
      .addCase(sendData.rejected, () => {
        console.log("sendData is rejected");
      });
  },
});

export const {
  increment,
  decrement,
  removeFromCart,
  toggleAdding,
  toggleCheckout,
} = cartSlice.actions;

export default cartSlice.reducer;
