import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Wrapper from "../Wrapper/Wrapper";
import "./Trending.css";
import { getData } from "../../utils/utilFunctions";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { MdLocalMovies, MdOndemandVideo } from "react-icons/md";
import TrendCard from "../../components/TrendCard/TrendCard";
import MovieCard from "../../components/MovieCard/MovieCard";
import { searchTermHandler } from "../../utils/utilFunctions";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState([]);

  const searchTerm = useSelector((state) => state.search.searchTerm);
  const { pathname } = useLocation();
  const scrollRef = React.useRef();

  const getDataHandler = async () => {
    const fetchedData = await getData();
    setData(fetchedData);

    const trendingFims = fetchedData.filter(
      (trend) => trend.isTrending === true
    );
    setTrending(trendingFims);

    const nonTrendingFims = fetchedData.filter(
      (trend) => trend.isTrending === false
    );
    setRecommendations(nonTrendingFims);
  };

  // console.log(data);

  useEffect(() => {
    getDataHandler();
  }, []);

  const searchHandler = () => {
    const results = searchTermHandler(searchTerm, data);
    setSearchResults(results);
  };

  useEffect(() => {
    if (pathname === "/" && searchTerm) {
      searchHandler();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, pathname]);

  function scroll(direction) {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <Wrapper heading="Trending">
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
        <div className="trending-films" ref={scrollRef}>
          {trending &&
            trending.length > 0 &&
            searchResults &&
            trending.map((trendFilm) => (
              <TrendCard
                key={trendFilm?.title}
                image={trendFilm.thumbnail.trending.large}
                year={trendFilm?.year}
                category={trendFilm?.category}
                rating={trendFilm?.rating}
                title={trendFilm?.title}
                categoryIcon={
                  trendFilm.category === "Movie" ? (
                    <MdLocalMovies />
                  ) : trendFilm.category === "TV Series" ? (
                    <MdOndemandVideo />
                  ) : null
                }
              />
            ))}
        </div>
      )}
      {searchResults.length === 0 && (
        <div className="trending-films_arrows">
          <BsArrowLeftSquare className="arrow" onClick={() => scroll("left")} />
          <BsArrowRightSquare
            className="arrow"
            onClick={() => scroll("right")}
          />
        </div>
      )}

      <>
        {searchResults.length === 0 && (
          <h2 className="h2">Recommended for you</h2>
        )}
        {searchResults.length === 0 && (
          <div className="trending_recommendations">
            {recommendations &&
              recommendations.length > 0 &&
              recommendations.map((item) => (
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
        )}
      </>
    </Wrapper>
  );
};

export default Trending;
