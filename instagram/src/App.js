import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer.js";
import dummyData from "./dummy-data.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCompass,
  faHeart,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
library.add(faCompass, faHeart, faUserCircle);

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }
  render() {
    console.log(dummyData);
    return (
      <div className="app">
        <SearchBar />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
