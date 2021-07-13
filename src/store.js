import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import booksReducer from "./redux/booksSlice";
import cartReducer from "./redux/cartSlice";

const rootReducer = combineReducers({
  books: booksReducer,
  cart: cartReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["books", "cart"],
  // blacklist: ["books", "cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
