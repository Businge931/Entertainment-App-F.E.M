import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Wrapper from "../Wrapper/Wrapper";
import "./TVSeries.css";
import { getData } from "../../utils/utilFunctions";
import MovieCard from "../../components/MovieCard/MovieCard";
import { searchTermHandler } from "../../utils/utilFunctions";

const TVSeries = () => {
  const [series, setSeries] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState([]);

  const searchTerm = useSelector((state) => state.search.searchTerm);
  const { pathname } = useLocation();

  const getDataHandler = async () => {
    const fetchData = await getData();
    const allSeries = fetchData.filter(
      (movie) => movie.category === "TV Series"
    );
    setSeries(allSeries);
    setData(allSeries);
  };
  const searchHandler = () => {
    const results = searchTermHandler(searchTerm, data);
    setSearchResults(results);
  };

  useEffect(() => {
    if (pathname === "/tvseries" && searchTerm) {
      searchHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, pathname]);

  useEffect(() => {
    getDataHandler();
  }, []);

  return (
    <Wrapper heading="TV Series">
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
                movie={movie}
              />
            ))}
        </div>
      )}
    </Wrapper>
  );
};

export default TVSeries;
