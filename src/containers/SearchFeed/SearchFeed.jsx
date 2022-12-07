import React, { useEffect, useState } from "react";
import "./SearchFeed.css";
import Wrapper from "../Wrapper/Wrapper";
import { useParams } from "react-router-dom";
import data from "../../utils/data.json";
import MovieCard from "../../components/MovieCard/MovieCard";

const SearchFeed = () => {
  const [searchedItem, setSearchItem] = useState([]);
  const { searchTerm } = useParams();

  console.log(data);
  //   const searchVideo = async () => {
  //     const headers = {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     };
  //     const search = await fetch("data.json", headers);

  //     const res = await search.json();
  //     setSearchItem(res);
  //   };

  //   console.log(searchedItem);

  //   useEffect(() => {
  //     searchVideo();
  //   }, []);

  return (
    <Wrapper heading="Search Results">
      <p style={{ color: "#fff" }}>Search results for {searchTerm}</p>
    </Wrapper>
  );
};

export default SearchFeed;
