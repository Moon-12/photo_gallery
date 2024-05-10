import "./SearchBox.css";
import SearchButton from "./SearchButton";
const SearchBox = () => {
  return (
    <div className="search-container">
      <input type="text" className="search-inp"></input>
      <SearchButton />
    </div>
  );
};

export default SearchBox;
