const SearchBar = ({ changeSearchField }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }} className="my-3">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        style={{ maxWidth: "250px" }}
        onChange={changeSearchField}
      />
    </div>
  );
};

export default SearchBar;
