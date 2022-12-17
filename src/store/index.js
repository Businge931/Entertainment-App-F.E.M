import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "./slices/bookmarks";
import searchReducer from "./slices/searchSlice";

const store = configureStore({
  reducer: { bookmarks: bookmarkReducer, search: searchReducer },
});

export default store;
