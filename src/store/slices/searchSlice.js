import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    setSearchTerm(state, { payload }) {
      state.searchTerm = payload;
    },
  },
});

const { reducer, actions } = searchSlice;

export const { setSearchTerm } = actions;

export default reducer;
