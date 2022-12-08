import React from "react";
import "./TrendCard.css";

import { BsBookmark, BsFillPlayCircleFill } from "react-icons/bs";

const TrendCard = ({ image, year, category, categoryIcon, rating, title }) => {
  return (
    <div className="tendCard">
      <img src={image} alt="trending" className="tending-image" />

      <div className="trendCard-content">
        <div className="trendCard-content__about">
          <p>{year}</p>
          <div />
          {categoryIcon}
          <p>{category}</p>
          <div />
          <p>{rating}</p>
        </div>
        <h4>{title}</h4>
      </div>

      <div className="trendCard_bookmark">
        <BsBookmark />
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
