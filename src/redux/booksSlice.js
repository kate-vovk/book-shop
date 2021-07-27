/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { getBooksPageApi } from "../api/books";
import { setPage as setPageP } from "./paginationSlice";

const initialState = {
  isLoading: false,
  data: [],
  // searchedData: [],
  error: null,
  // notFound: false,
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
    // incrementPage: (state) => {
    //   state.page += 1;
    // },
    // setPage: (state, action) => {
    //   state.page = action.payload;
    // },
    // setSearchedBooks: (state, action) => {
    //   // state.page = 1;
    //   state.notFound = false;
    //   state.searchedData = action.payload;
    // },
    // setNotFound: (state, action) => {
    //   state.notFound = action.payload;
    // },
  },
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
