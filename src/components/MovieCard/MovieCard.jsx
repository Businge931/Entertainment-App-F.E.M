import React from "react";
import "./MovieCard.css";
import { BsBookmark } from "react-icons/bs";
import greatLands from "../../assets/thumbnails/the-great-lands/regular/medium.jpg";
import data from "../../utils/data.json";

const MovieCard = ({ image, year, category, rating, title }) => {
  // const selectIcon=data

  return (
    <div className="movieCard">
      <img src={greatLands} alt="greatlands" className="movieCard-image" />

      <div className="trendCard_content">
        <div className="trendCard_content__about">
          <p>{year}</p>
          <div />
          {/* <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z"
              fill="#FFF"
              opacity=".75"
            />
          </svg> */}

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
    </div>
  );
};

export default MovieCard;
