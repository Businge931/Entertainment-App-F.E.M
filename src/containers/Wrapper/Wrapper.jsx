import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Wrapper.css";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Wrapper = ({ heading, children }) => {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const searchValueHandler = (e) => {
    e.preventDefault();

    if (searchValue) {
      navigate(`/search/:${searchValue}`);
    }
  };

  return (
    <div className="wrapper">
      <Navbar />
      <div className="wrapper-content">
        <form onSubmit={searchValueHandler} className="wrapper-form">
          <FiSearch size={26} color="#fff" />
          <input
            placeholder="Search for movies or TV series"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            value={searchValue}
          />
        </form>

        <h1>{heading}</h1>

        {children}
      </div>
    </div>
  );
};

export default Wrapper;
