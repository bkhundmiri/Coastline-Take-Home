import "./Search.css"

const Search = (props) => {
  return (
      <div className="search-wrapper">
        <input
          className="search-bar"
          type="text"
          name="Search"
          placeholder="Search"
          value={props.value}
          onChange={(e) => props.onChange(e)}
          autoFocus
        />
      </div>
  );
};

export default Search;