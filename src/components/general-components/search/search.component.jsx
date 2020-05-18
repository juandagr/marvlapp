import React from "react";

import "./search.styles.scss";

const Search = ({ placeholder, handleSearch }) => (
  <div className="search-container">
    <div className="search-container__box">
      <input
        className="search-container__input"
        type="search-box"
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  </div>
);

export default Search;
