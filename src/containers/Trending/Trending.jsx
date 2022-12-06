import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./Trending.css";
import TrendCard from "../../components/TrendCard/TrendCard";
import imag from "../../assets/thumbnails/beyond-earth/trending/large.jpg";
import data from "../../utils/data.json";
import MovieCard from "../../components/MovieCard/MovieCard";

const Trending = () => {
  const filteredData = data.filter((trend) => {
    if (trend.isTrending === true) {
      return trend;
    }
    return trend;
  });

  console.log(data);

  return (
    <Wrapper heading="Trending">
      <div className="trending-films">
        {filteredData.map((trendFilm) => (
          <TrendCard
            key={trendFilm?.title}
            trendImage={imag}
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
          {data.map((item) => (
            <MovieCard
              key={item.title}
              rating={item.rating}
              year={item.year}
              category={item.category}
              title={item.title}
              // image={item.thumbnail.regular.medium}
            />
          ))}
        </div>
      </>
    </Wrapper>
  );
};

export default Trending;
