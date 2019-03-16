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
      posts: [],
      filteredPost: []
    };
  }
  componentDidMount() {
    console.log("CDM");
    this.setState({ posts: dummyData });
  }
  searchPostsHandler = event => {
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    });
    this.setState({ filteredPost: posts });
  };
  render() {
    return (
      <div className="app">
        <SearchBar searchPosts={this.searchPostsHandler} />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
