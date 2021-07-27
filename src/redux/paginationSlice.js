import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  limit: 5,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    incrementPage: (state) => {
      return { ...state, page: state.page + 1 };
    },
    setPage: (state, action) => {
      return { ...state, page: action.payload };
    },
  },
});

export const { incrementPage, setPage } = paginationSlice.actions;

export default paginationSlice.reducer;
