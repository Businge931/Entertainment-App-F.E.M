import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./MovieCard.css";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import { addBookmark, removeBookmark } from "../../store/bookmarks";

const MovieCard = ({
  image,
  year,
  category,
  categoryIcon,
  rating,
  title,
  movie,
  // checkBookmarkedMovie,
  // checkBookmarkedTVSeries,
}) => {
  const { allBookmarks } = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();

  const isBookmarked =
    allBookmarks?.findIndex((movie) => movie.title === title) !== -1;

  // const checkBookmarkedMovie =
  //   isBookmarked &&
  //   allBookmarks?.findIndex((movie) => {
  //     console.log(movie);
  //     return movie.category === "Movie";
  //   }) !== -1;

  // console.log(checkBookmarkedMovie ? true : false);

  // const checkBookmarkedTVSeries =
  //   isBookmarked &&
  //   allBookmarks?.findIndex((movie) => movie.category === "TV Series");

  const manageBookmark = () => {
    if (isBookmarked) {
      dispatch(removeBookmark(movie));
    } else {
      dispatch(addBookmark(movie));
    }
  };

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

      <div className="movieCard_bookmark" onClick={manageBookmark}>
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
