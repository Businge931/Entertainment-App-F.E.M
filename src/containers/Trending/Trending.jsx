import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./Trending.css";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import TrendCard from "../../components/TrendCard/TrendCard";
import MovieCard from "../../components/MovieCard/MovieCard";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  // const movieRecommendations = nonTrendingFims.filter(
  //   (recommendation) => recommendation.category === "Movie"
  // );
  // // console.log(movieRecommendations);

  // const tvseriesRecommendations = nonTrendingFims.filter(
  //   (recommendtion) => recommendtion.category === "TV Series"
  // );
  // // console.log(tvseriesRecommendations);

  // const allRecommendations = movieRecommendations.concat(
  //   tvseriesRecommendations
  // );

  // const shuffledRecommendations = allRecommendations.sort(
  //   () => Math.random() - 0.5
  // );

  // console.log(shuffledRecommendations);

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

    const trendingFims = allData.filter((trend) => trend.isTrending === true);
    setTrending(trendingFims);

    const nonTrendingFims = allData.filter(
      (trend) => trend.isTrending === false
    );
    setRecommendations(nonTrendingFims);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper heading="Trending">
      <div className="trending-films">
        {trending &&
          trending.length > 0 &&
          trending.map((trendFilm) => (
            <TrendCard
              key={trendFilm?.title}
              image={trendFilm.thumbnail.trending.large}
              year={trendFilm?.year}
              category={trendFilm?.category}
              rating={trendFilm?.rating}
              title={trendFilm?.title}
            />
          ))}
      </div>

      <>
        <h2 className="h2">Recommended for you</h2>
        <div className="trending_recommendations">
          {recommendations.map((item) => (
            <MovieCard
              key={item.title}
              rating={item.rating}
              year={item.year}
              category={item.category}
              title={item.title}
              // image={item.thumbnail.regular.medium}
              isBookmarked={
                item.isBookmarked ? <BsBookmarkFill /> : <BsBookmark />
              }
            />
          ))}
        </div>
      </>
    </Wrapper>
  );
};

export default Trending;
