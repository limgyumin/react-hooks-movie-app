import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <div className="search__box">
      <input
        type="text"
        placeholder="Search With Movie Name..."
        onChange={(e) => props.setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
