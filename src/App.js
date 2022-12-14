import "./App.css";
import { Routes, Route } from "react-router-dom";
import Trending from "./containers/Trending/Trending";
import Movies from "./containers/Movies/Movies";
import TVSeries from "./containers/TVSeries/TVSeries";
import Bookmarks from "./containers/Bookmarks/Bookmarks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Trending />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tvseries" element={<TVSeries />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
    </Routes>
  );
}

export default App;
