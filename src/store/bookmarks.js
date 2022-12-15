import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const fetchAllData = createAsyncThunk("data/fetchAllData", async () => {
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  const fetchData = await fetch("data.json", headers);
  const allData = await fetchData.json();
  return allData;
});

const bookmarksSlice = createSlice({
  name: "bookmark",
  initialState: {
    allBookmarks: [],
    // bookmarkedMovies: [],
    // bookmarkedTVSeries: [],
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAllData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allBookmarks = action.payload;
      })
      .addCase(fetchAllData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

const store = configureStore({
  reducer: { bookmarks: bookmarksSlice.reducer },
});

export const {
  addBookmark,
  removeBookmark,
  addBookmarkTVSeries,
  addBookmarkMovie,
} = bookmarksSlice.actions;

export default store;
