import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchedData: [],
  notFound: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchedBooks: (state, action) => {
      return { ...state, notFound: false, searchedData: action.payload };
    },
    setNotFound: (state, action) => {
      return { ...state, notFound: action.payload };
    },
  },
});

export const { setSearchedBooks, setNotFound } = searchSlice.actions;

export default searchSlice.reducer;
