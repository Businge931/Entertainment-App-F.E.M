import React from "react";
import "./CardContent.css";
const CardContent = ({ year, category, rating, title }) => {
  return (
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
  );
};

export default CardContent;
