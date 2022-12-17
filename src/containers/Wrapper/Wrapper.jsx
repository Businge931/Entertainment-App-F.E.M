import Navbar from "../../components/Navbar/Navbar";
import "./Wrapper.css";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../store/slices/searchSlice";

const Wrapper = ({ heading, children }) => {
  const searchTerm = useSelector((state) => state.search.searchTerm);

  const dispatch = useDispatch();

  const searchValueHandler = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="wrapper">
      <Navbar />
      <div className="wrapper-content">
        <form className="wrapper-form">
          <FiSearch size={26} color="#fff" />
          <input
            placeholder="Search for movies or TV series"
            onChange={searchValueHandler}
            value={searchTerm}
          />
        </form>

        {searchTerm ? (
          <h1>
            Search results for: <span className="searchTerm">{searchTerm}</span>
          </h1>
        ) : (
          <h1>{heading}</h1>
        )}

        {children}
      </div>
    </div>
  );
};

export default Wrapper;
