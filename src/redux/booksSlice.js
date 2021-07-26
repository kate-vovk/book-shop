/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBooksPageApi, getBooksByTitle } from "../api/books";

const initialState = {
  isLoading: false,
  data: [],
  searchedData: [],
  error: null,
  page: 1,
  limit: 5,
  notFound: false,
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
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSearchedBooks: (state, action) => {
      // state.searched = true;
      // if (!action.payload.length) {
      state.page = 1;
      state.notFound = false;
      // }
      state.searchedData = action.payload;
    },
    setNotFound: (state, action) => {
      state.notFound = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.searched = false;
        state.data = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        throw new Error("getBooks is rejected");
      });
  },
});

export const { incrementPage, setPage, setSearchedBooks, setNotFound } =
  booksSlice.actions;
export default booksSlice.reducer;
