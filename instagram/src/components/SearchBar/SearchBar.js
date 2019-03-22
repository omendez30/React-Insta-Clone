import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faHeart,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search-bar-wrapper">
      <form onSubmit={props.submitFunction}>
        <div className="social">
          <i className="fab fa-instagram fa-2x" />
          <h2 className="instagram-title">Instagram</h2>
        </div>

        <div>
          {/* <i className="fas fa-search" /> */}
          <input
            type="text"
            placeholder="Search"
            onChange={props.searchPosts}
            value={props.SearchTerm}
          />
        </div>
        <div className="social-wrapper">
          <div className="social">
            <FontAwesomeIcon
              className="compass-icon"
              icon="compass"
              size={"2x"}
            />
          </div>
          <div className="social">
            <FontAwesomeIcon className="heart-icon" icon="heart" size={"2x"} />
          </div>
          <div className="social">
            <FontAwesomeIcon
              className="user-circle-icon"
              icon="user-circle"
              size={"2x"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
