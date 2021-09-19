import "./Search.css"

const Search = (props) => {
  return (
    <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
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
    </form>
  );
};

export default Search;