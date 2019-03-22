import React from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer.js";
import dummyData from "./dummy-data.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCompass,
  faHeart,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import PostPage from "./components/PostContainer/PostPage";
import Login from "./components/Login/Login";
import Authenticate from "./components/Authenticaiton/Authenticate";
library.add(faCompass, faHeart, faUserCircle);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }
  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchPostHandler = event => {
    event.preventDefault();
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(event.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  searchName = event => {};
  render() {
    console.log(dummyData);
    return (
      <div className="app">
        {/* <SearchBar
          searchPosts={this.searchPostHandler}
          searchTerm={this.state.searchTerm}
        /> */}
        <PostPage />
        {/* <PostContainer posts={this.state.posts} /> */}
      </div>
    );
  }
}

// export default App;
export default Authenticate(App);
