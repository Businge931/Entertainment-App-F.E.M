import React, { useState, useEffect } from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./TVSeries.css";
import { getData } from "../../utils/fetchData";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import MovieCard from "../../components/MovieCard/MovieCard";

const TVSeries = () => {
  const [series, setSeries] = useState([]);

  const getDataHandler = async () => {
    const fetchData = await getData();
    const allSeries = fetchData.filter(
      (movie) => movie.category === "TV Series"
    );
    setSeries(allSeries);
  };

  useEffect(() => {
    getDataHandler();
  }, []);

  return (
    <Wrapper heading="TV Series">
      <div className="series-container">
        {series &&
          series.length > 0 &&
          series.map((movie) => (
            <MovieCard
              key={movie.title}
              rating={movie.rating}
              year={movie.year}
              title={movie.title}
              category={movie.category}
              image={movie.thumbnail.regular.medium}
              isBookmarked={
                movie.isBookmarked ? <BsBookmarkFill /> : <BsBookmark />
              }
            />
          ))}
      </div>
    </Wrapper>
  );
};

export default TVSeries;
