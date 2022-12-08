import React from "react";
import "./TrendCard.css";
import trendImage from "../../assets/thumbnails/bottom-gear/trending/large.jpg";

import {
  BsBookmark,
  //   BsFillBookmarkFill,
  BsFillPlayCircleFill,
} from "react-icons/bs";

const TrendCard = ({ image, year, category, rating, title }) => {
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

      <div className="trendCard_overlay">
        <div className="trendCard_play">
          <BsFillPlayCircleFill />
          <p>Play</p>
        </div>
      </div>
    </div>
  );
};

export default TrendCard;
