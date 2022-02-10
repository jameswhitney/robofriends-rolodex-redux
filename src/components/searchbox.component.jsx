const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2 ma2d">
      <input
        className=" tc pa2 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search for robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
