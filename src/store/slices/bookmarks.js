import { createSlice } from "@reduxjs/toolkit";

const bookmarksSlice = createSlice({
  name: "bookmark",
  initialState: {
    allBookmarks: [],
    isLoading: false,
  },
  reducers: {
    addBookmark(state, { payload }) {
      const existingFilm =
        state.allBookmarks.findIndex((film) => film.title === payload.title) !==
        -1;

      if (!existingFilm) {
        state.allBookmarks.push(payload);
      }
    },

    removeBookmark(state, { payload }) {
      const existingFilm =
        state.allBookmarks.findIndex((film) => film.title === payload.title) !==
        -1;

      if (existingFilm) {
        const allBookmarksCopy = [...state.allBookmarks];
        const filteredBookmarks = allBookmarksCopy.filter(
          (bookmark) => bookmark.title !== payload.title
        );
        state.allBookmarks = [...filteredBookmarks];
      }
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchAllData.pending, (state, action) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(fetchAllData.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.allBookmarks = action.payload;
  //     })
  //     .addCase(fetchAllData.rejected, (state) => {
  //       state.isLoading = false;
  //     });
  // },
});
const { reducer, actions } = bookmarksSlice;

export const {
  addBookmark,
  removeBookmark,
  addBookmarkTVSeries,
  addBookmarkMovie,
} = actions;

export default reducer;
