import React from "react";
import "./Navbar.css";
import profilePicture from "../../assets/icons/profile.png";
import { NavLink } from "react-router-dom";

import {
  MdMovieCreation,
  MdLocalMovies,
  MdOndemandVideo,
} from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="app__navbar ">
      <MdMovieCreation size={32} color="#fc4747" id="movie-icon" />

      <ul className="app__navbar-list">
        <li>
          <NavLink to="/" className="navbar-icons">
            <AiFillAppstore size={24} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className="navbar-icons">
            <MdLocalMovies size={24} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/tvseries" className="navbar-icons">
            <MdOndemandVideo size={22} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookmarks" className="navbar-icons">
            <BsFillBookmarkFill size={20} />
          </NavLink>
        </li>
      </ul>

      <img src={profilePicture} alt="profile" className="profile-picture" />
    </div>
  );
};

export default Navbar;
