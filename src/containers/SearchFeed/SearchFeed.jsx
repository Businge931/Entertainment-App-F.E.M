import React, { useEffect, useState } from "react";
import "./SearchFeed.css";
import Wrapper from "../Wrapper/Wrapper";
import { useParams, useNavigate } from "react-router-dom";
import { getData } from "../../utils/fetchData";

import MovieCard from "../../components/MovieCard/MovieCard";

const SearchFeed = () => {
  const [data, setData] = useState([]);
  const { searchTerm } = useParams();
  // const navigate = useNavigate();

  async function fetchAllData() {
    const data = await getData();

    console.log(data);

    // data.filter((search) => {
    //   if (searchTerm === "") {
    //     return search;
    //   } else if (
    //     search.title.toLowerCase().includes(searchTerm.toLowerCase())
    //   ) {
    //     return search;
    //   }
    // }).map(searchResult=><MovieCard/>);

    setData(data);
  }

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <Wrapper heading="Search Results">
      <p style={{ color: "#fff" }}>Search results for {searchTerm}</p>
      {}
    </Wrapper>
  );
};

export default SearchFeed;
