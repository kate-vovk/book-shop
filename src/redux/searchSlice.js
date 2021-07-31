import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchedData: [],
  notFound: false,
  inputValue: "",
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
    setInputValue: (state, action) => {
      return { ...state, inputValue: action.payload };
    },
  },
});

export const { setInputValue, setSearchedBooks, setNotFound } =
  searchSlice.actions;

export default searchSlice.reducer;
