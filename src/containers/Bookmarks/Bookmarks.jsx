import { useSelector } from "react-redux";
import Wrapper from "../Wrapper/Wrapper";
import "./Bookmarks.css";
import MovieCard from "../../components/MovieCard/MovieCard";

const Bookmarks = () => {
  const { isLoading, allBookmarks } = useSelector((state) => state.bookmarks);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <Wrapper heading="Bookmarks">
      <div className="movies-bookmarked">
        {allBookmarks.map((movie) => (
          <MovieCard
            key={movie.title}
            rating={movie.rating}
            movie={movie}
            year={movie.year}
            title={movie.title}
            category={movie.category}
            image={movie.thumbnail.regular.medium}
          />
        ))}
      </div>

      {/* <h2 id="h2">Bookmarked TV Series</h2> */}
      {/* <div className="tvseries-bookmarked">
        {allBookmarks.map((movie) => (
          <MovieCard
            key={movie.title}
            rating={movie.rating}
            year={movie.year}
            title={movie.title}
            movie={movie}
            category={movie.category}
            image={movie.thumbnail.regular.medium}
          />
        ))}
      </div> */}
    </Wrapper>
  );
};

export default Bookmarks;
