import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Wrapper from "../Wrapper/Wrapper";
import { getData } from "../../utils/fetchData";
import "./Movies.css";
import MovieCard from "../../components/MovieCard/MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const { isLoading } = useSelector((state) => state.bookmarks);

  const getDataHandler = async () => {
    const fetchData = await getData();
    const allMovies = fetchData.filter((movie) => movie.category === "Movie");
    setMovies(allMovies);
  };

  useEffect(() => {
    getDataHandler();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Wrapper heading="Movies">
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
    </Wrapper>
  );
};

export default Movies;
