import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./Bookmarks.css";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import MovieCard from "../../components/MovieCard/MovieCard";

const Bookmarks = () => {
  const [bookmarkedMovies, setBoolmarkedMovies] = useState([]);
  const [bookmarkedTVSeries, setBoolmarkedTVSeries] = useState([]);

  const getData = async () => {
    const headers = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const fetchData = await fetch("data.json", headers);

    const allData = await fetchData.json();

    const bookmardeMovies = allData.filter(
      (movie) => movie.isBookmarked === true && movie.category === "Movie"
    );
    setBoolmarkedMovies(bookmardeMovies);
    const bookmarkedTVSeries = allData.filter(
      (movie) => movie.isBookmarked === true && movie.category === "TV Series"
    );
    setBoolmarkedTVSeries(bookmarkedTVSeries);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper heading="Bookmarked Movies">
      <div className="movies-bookmarked">
        {bookmarkedMovies.map((movie) => (
          <MovieCard
            key={movie.title}
            rating={movie.rating}
            year={movie.year}
            title={movie.title}
            category={movie.category}
            // image={movie.image}
            isBookmarked={
              movie.isBookmarked ? <BsBookmarkFill /> : <BsBookmark />
            }
          />
        ))}
      </div>

      <h2 id="h2">Bookmarked TV Series</h2>
      <div className="tvseries-bookmarked">
        {bookmarkedTVSeries.map((movie) => (
          <MovieCard
            key={movie.title}
            rating={movie.rating}
            year={movie.year}
            title={movie.title}
            category={movie.category}
            // image={movie.image}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Bookmarks;
