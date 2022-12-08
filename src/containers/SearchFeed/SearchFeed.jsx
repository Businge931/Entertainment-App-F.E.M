// import React, { useEffect, useState } from "react";
import "./SearchFeed.css";
import Wrapper from "../Wrapper/Wrapper";
import { useParams } from "react-router-dom";
import { getData } from "../../utils/fetchData";

import MovieCard from "../../components/MovieCard/MovieCard";

const SearchFeed = () => {
  // const [searchedItem, setSearchItem] = useState([]);
  const { searchTerm } = useParams();

  return (
    <Wrapper heading="Search Results">
      <p style={{ color: "#fff" }}>Search results for {searchTerm}</p>
    </Wrapper>
  );
};

export default SearchFeed;
