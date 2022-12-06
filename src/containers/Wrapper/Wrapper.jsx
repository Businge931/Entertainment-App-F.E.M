import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Wrapper.css";
import { FiSearch } from "react-icons/fi";

const Wrapper = ({ heading, children }) => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="wrapper-content">
        <div className="wrapper-input">
          <FiSearch size={26} color="#fff" />
          <input
            placeholder="Search for movies or TV series"
            onChange={() => {}}
          />
        </div>
        <h1>{heading}</h1>

        {children}
      </div>
    </div>
  );
};

export default Wrapper;
