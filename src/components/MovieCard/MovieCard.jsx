import React from "react";
import "./MovieCard.css";
import { BsFillPlayCircleFill } from "react-icons/bs";
import greatLands from "../../assets/thumbnails/the-great-lands/regular/medium.jpg";

const MovieCard = ({ image, year, category, rating, title, isBookmarked }) => {
  return (
    <div className="movieCard">
      <img src={greatLands} alt="greatlands" className="movieCard-image" />

      <div className="movieCard_content">
        <div className="movieCard_content__about">
          <p>{year}</p>
          <div />
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
