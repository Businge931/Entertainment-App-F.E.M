import React from "react";
import "./TrendCard.css";
// import data from "../../utils/data.json";

import {
  BsBookmark,
  //   BsFillBookmarkFill,
  BsFillPlayCircleFill,
} from "react-icons/bs";

const TrendCard = ({ trendImage, year, category, rating, title }) => {
  // const filteredData = data.filter((trend) => {
  //   if (trend.isTrending === true) {
  //     return trend;
  //   }
  // });

  return (
    <div className="tendCard">
      <img src={trendImage} alt="trending" className="tending-image" />

      <div className="trendCard-content">
        <div className="trendCard-content__about">
          <p>{year}</p>
          <div />
          <p>{category}</p>
          <div />
          <p>{rating}</p>
        </div>
        <h4>{title}</h4>
      </div>

      <div className="trendCard_bookmark">
        <BsBookmark />
        {/* <BsFillBookmarkFill /> */}
      </div>

      <div className="trendCard-buttonContainer">
        <BsFillPlayCircleFill />
        <p>Play</p>
      </div>
    </div>
  );
};

export default TrendCard;
