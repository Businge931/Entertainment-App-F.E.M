import React from "react";
import "./MovieCard.css";
import { BsFillPlayCircleFill } from "react-icons/bs";

const MovieCard = ({
  image,
  year,
  category,
  categoryIcon,
  rating,
  title,
  isBookmarked,
}) => {
  return (
    <div className="movieCard">
      <img src={image} alt="greatlands" className="movieCard-image" />

      <div className="movieCard_content">
        <div className="movieCard_content__about">
          <p>{year}</p>
          <div />
          {categoryIcon}
          <p>{category}</p>
          <div />
          <p>{rating}</p>
        </div>
        <h4>{title}</h4>
      </div>

      <div className="movieCard_bookmark">{isBookmarked}</div>

      <div className="movieCard_overlay">
        <div className="movieCard_play">
          <BsFillPlayCircleFill />
          <p>Play</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
