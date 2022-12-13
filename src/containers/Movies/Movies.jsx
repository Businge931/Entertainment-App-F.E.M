import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { MdLocalMovies } from "react-icons/md";

import Wrapper from "../Wrapper/Wrapper";
import "./Movies.css";
import { getData } from "../../utils/fetchData";
import { bookmarkActions } from "../../store/bookmarks";
import MovieCard from "../../components/MovieCard/MovieCard";
import { fetchAllData } from "../../store/bookmarks";


const Movies = () => {
  const [movies, setMovies] = useState([]);

  const dispatch=useDispatch()
  const {isLoading,isBookmarked} = useSelector((state) => state.bookmarks);

const manageBookmark = () => {
    if(isBookmarked===true){
      console.log('remove')
      dispatch(bookmarkActions.removeBokmark())
    }else{
      console.log('add')
         dispatch(
      bookmarkActions.addBookmark()
    );
}

  };

  const fetchMovies =  () => {
   const allData= dispatch(fetchAllData())
    
    const allMovies = allData.filter((movie) => movie.category === "Movie");
    setMovies(allMovies);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Wrapper heading="Movies">
      <div className="movies-container">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => (
            <MovieCard
              key={movie.title}
              rating={movie.rating}
              year={movie.year}
              title={movie.title}
              category={movie.category}
              image={movie.thumbnail.regular.large}
              // isBookmarked={
              //   movie.isBookmarked ? <BsBookmarkFill /> : <BsBookmark />
              // }
              // categoryIcon={movie.category && <MdLocalMovies />}
              onmanageBookmark={manageBookmark}
            />
          ))}
      </div>
    </Wrapper>
  );
};

export default Movies;
