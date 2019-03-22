import React from "react";
import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

class PostPage extends React.Component {
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
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(event.target.value)) {
        return posts;
      } else {
        return null;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <div className="app">
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostHandler}
        />
        <PostContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.silteredPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}

export default PostPage;
