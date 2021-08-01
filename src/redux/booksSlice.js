/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBooksPageApi } from "../api/books";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async ({ page, limit }) => {
    const x = getBooksPageApi(page, limit);
    return x;
  }
);

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        throw new Error("getBooks is rejected");
      });
  },
});

export const { setSearchedBooks, setNotFound } = booksSlice.actions;
export default booksSlice.reducer;
