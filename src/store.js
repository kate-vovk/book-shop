import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./redux/booksSlice";
import cartReducer from "./redux/cartSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    cart: cartReducer,
  },
});
