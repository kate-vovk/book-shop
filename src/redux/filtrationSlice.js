/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBooksByAuthor } from "../api/books";

const initialState = [];

export const getBooks = createAsyncThunk(
  "filtration/getBooks",
  async (author) => {
    const x = getBooksByAuthor(author);
    return x;
  }
);

export const filtrationSlice = createSlice({
  name: "filtration",
  initialState,
  reducers: {
    addToFiltration: (state, action) => {
      state.push(action.payload);
      Array.from(new Set(state));
    },
    removeFromFiltration: (state, action) => {
      return state.filter((id) => id !== action.payload);
    },
    extraReducers: (builder) => {
      builder.addCase(getBooks.fulfilled, (state, action) => {
        // state.data = action.payload;
        action.payload.forEach((item) => {
          state.push(item.id);
        });
        // state.push(action.payload);
        Array.from(new Set(state));
      });
    },
  },
});

export default filtrationSlice.reducer;
