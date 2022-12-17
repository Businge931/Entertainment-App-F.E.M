import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Wrapper from "../Wrapper/Wrapper";
import { getData } from "../../utils/utilFunctions";
import "./Movies.css";
import MovieCard from "../../components/MovieCard/MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState([]);

  const searchTerm = useSelector((state) => state.search.searchTerm);
  const { pathname } = useLocation();

  const { isLoading } = useSelector((state) => state.bookmarks);

  const getDataHandler = async () => {
    const fetchData = await getData();
    const allMovies = fetchData.filter((movie) => movie.category === "Movie");
    setData(allMovies);
    setMovies(allMovies);
  };

  useEffect(() => {
    getDataHandler();
  }, []);

  useEffect(() => {
    if (pathname === "/movies" && searchTerm) {
      searchTermHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, pathname]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  function searchTermHandler() {
    if (searchTerm !== "") {
      const Results = data?.filter((Result) => {
        return Object.values(Result)
          .join(" ")
          .replace(/-/g, " ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(Results);
    }
  }

  return (
    <Wrapper heading="Movies">
      <div className="search-results">
        {searchResults &&
          searchResults.length > 0 &&
          searchResults.map((item) => (
            <MovieCard
              key={item.title}
              rating={item.rating}
              year={item.year}
              category={item.category}
              title={item.title}
              image={item.thumbnail.regular.medium}
              movie={item}
            />
          ))}
      </div>

      {searchResults.length === 0 && (
        <div className="movies-container">
          {movies.map((movie) => (
            <MovieCard
              key={movie.title}
              rating={movie.rating}
              year={movie.year}
              title={movie.title}
              category={movie.category}
              movie={movie}
              image={movie.thumbnail.regular.large}
            />
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default Movies;
