import React from "react";
import { useSelector } from "react-redux";

import "./MovieCard.css";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";

const MovieCard = ({
  image,
  year,
  category,
  categoryIcon,
  rating,
  title,
  onmanageBookmark
}) => {

  const {isBookmarked} = useSelector((state) => state.bookmarks);



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

      <div className="movieCard_bookmark" onClick={onmanageBookmark}>
        {isBookmarked && <BsBookmarkFill />}
        {!isBookmarked && <BsBookmark />}
      </div>

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
