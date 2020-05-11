import { Link } from "react-router-dom";

import "./header.styles.scss";

import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="options">
        <Link className="option" to="">
          CHARACTERS
        </Link>
        <Link className="option" to="">
          COMICS
        </Link>
        <Link className="option" to="">
          SERIES
        </Link>
      </div>
    </div>
  );
};

export default Header;
