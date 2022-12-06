import "./App.css";
import { Routes, Route } from "react-router-dom";
import Trending from "./containers/Trending/Trending";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Trending />} />
    </Routes>
  );
}

export default App;
