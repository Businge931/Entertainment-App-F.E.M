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

    // console.log(allData);

  return allData;
});

const bookmarksSlice = createSlice({
  name: "bookmark",
  initialState: {
    allBookmarks: [],
    isBookmarked: false,
    isLoading:false
  },
    reducers: {
      addBookmark(state, action) {
        state.isBookmarked=true
        const newFilm = action.payload;
        const existingFilm = state.allBookmarks.find(
          (film) => film.title === newFilm.title
        );
        if (!existingFilm) {
          state.allBookmarks.push({
            title: newFilm.title,
            category: newFilm.category,
            year: newFilm.year,
            rating: newFilm.rating,
            image: newFilm.image,
          });
        }
      },
      removeBokmark(state, action) {
        state.isBookmarked=false
        const title = action.payload;
        const existingFilm = state.allBookmarks.find(
          (film) => film.title === title
        );
        if (existingFilm) {
          state.allBookmarks = state.allBookmarks.filter(
            (bookmark) => bookmark.title !== title
          );
        }
      },
    },
  extraReducers:builder=> {
    builder
    .addCase(fetchAllData.pending,(state,action)=>{
      state.isBookmarked=false
      state.isLoading=true
    })
    .addCase(fetchAllData.fulfilled,(state,action)=>{
     state.isLoading=false
     state.allBookmarks=action.payload
    })
    .addCase(fetchAllData.rejected,(state)=>{
      state.isLoading=false
    })
  },
});

const store = configureStore({
  reducer: { bookmarks: bookmarksSlice.reducer },
});

export const bookmarkActions = bookmarksSlice.actions;

export default store;
