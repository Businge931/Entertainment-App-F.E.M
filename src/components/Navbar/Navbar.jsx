import React from "react";
import "./Navbar.css";
import profilePicture from "../../assets/icons/profile.png";

import { MdMovieCreation, MdLocalMovies } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="app__navbar ">
      <MdMovieCreation size={32} color="#fc4747" id="movie-icon" />

      <ul className="app__navbar-list">
        <li>
          <AiFillAppstore size={24} />
        </li>
        <li>
          <MdLocalMovies size={24} />
        </li>
        <li>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" />
          </svg>
        </li>
        <li>
          <BsFillBookmarkFill size={20} />
        </li>
      </ul>

      <img src={profilePicture} alt="profile" className="profile-picture" />
    </div>
  );
};

export default Navbar;
