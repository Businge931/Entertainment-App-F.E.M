import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./Movies.css";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import MovieCard from "../../components/MovieCard/MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState([]);

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
    const allMovies = allData.filter((movie) => movie.category === "Movie");
    setMovies(allMovies);
  };

  useEffect(() => {
    getData();
  }, []);

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
            // image={movie.thumbnail.regular.medium}
            isBookmarked={
              movie.isBookmarked ? <BsBookmarkFill /> : <BsBookmark />
            }
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Movies;
