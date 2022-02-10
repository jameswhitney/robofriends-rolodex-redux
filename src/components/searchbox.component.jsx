const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className=" tc pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search for robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
