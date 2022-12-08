import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./Movies.css";
import { getData } from "../../utils/fetchData";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { MdLocalMovies } from "react-icons/md";

import MovieCard from "../../components/MovieCard/MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const fetchedData = await getData();
    const allMovies = fetchedData.filter((movie) => movie.category === "Movie");
    setMovies(allMovies);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Wrapper heading="Movies">
      <div className="movies-container">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => (
            <MovieCard
              key={movie.title}
              rating={movie.rating}
              year={movie.year}
              title={movie.title}
              category={movie.category}
              image={movie.thumbnail.regular.large}
              isBookmarked={
                movie.isBookmarked ? <BsBookmarkFill /> : <BsBookmark />
              }
              categoryIcon={movie.category && <MdLocalMovies />}
            />
          ))}
      </div>
    </Wrapper>
  );
};

export default Movies;
