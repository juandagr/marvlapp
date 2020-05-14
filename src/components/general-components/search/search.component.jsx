import React from "react";

const Search = ({ placeholder, handleSearch }) => (
  <div className="search-container">
    <input type="search" placeholder={placeholder} onChange={handleSearch} />
  </div>
);

export default Search;
