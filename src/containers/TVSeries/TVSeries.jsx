import React, { useState, useEffect } from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./TVSeries.css";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import MovieCard from "../../components/MovieCard/MovieCard";

const TVSeries = () => {
  const [series, setSeries] = useState([]);

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
    const allSeries = allData.filter((movie) => movie.category === "TV Series");
    setSeries(allSeries);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper heading="TV Series">
      <div className="series-container">
        {series.map((movie) => (
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
    </Wrapper>
  );
};

export default TVSeries;
