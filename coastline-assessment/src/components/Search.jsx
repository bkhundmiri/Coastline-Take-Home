

const Search = (props) => {
  return (
    <form onSubmit={(e) => props.onSubmit(e)}>
      <input
        className="search-bar"
        type="text"
        name="Search"
        placeholder="Search"
        value={props.value}
        onChange={(e) => props.onChange(e)}
        autoFocus
      />
    </form>
  );
};

export default Search;