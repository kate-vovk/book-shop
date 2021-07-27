import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import booksReducer from "./redux/booksSlice";
import cartReducer from "./redux/cartSlice";
import paginationReducer from "./redux/paginationSlice";
import searchReducer from "./redux/searchSlice";
import favoritesReducer from "./redux/favoritesSlice";

const rootReducer = combineReducers({
  books: booksReducer,
  cart: cartReducer,
  favorites: favoritesReducer,
  pagination: paginationReducer,
  search: searchReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
