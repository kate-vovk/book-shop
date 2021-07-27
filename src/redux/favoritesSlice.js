import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      return state.filter((id) => id !== action.payload);
    },
    toggleAddingToFavorites: (state, action) => {
      if (state.includes(action.payload)) {
        return state.filter((id) => id !== action.payload);
      }
      return [...state, action.payload];
    },
  },
});

export const { addToFavorites, removeFromFavorites, toggleAddingToFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
