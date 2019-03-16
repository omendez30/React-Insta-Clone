import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <i className="fab fa-instagram fa-5x" />
        <h2 className="instagram-title">Instagram</h2>
      </div>

      <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
      </div>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon className="compass-icon" icon="compass" />
        </div>
        <div className="social">
          <FontAwesomeIcon className="heart-icon" icon="heart" />
        </div>
        <div className="social">
          <FontAwesomeIcon className="user-circle-icon" icon="user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
