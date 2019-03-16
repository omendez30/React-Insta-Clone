import React from "react";
import PostHeader from "./PostHeader";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

import "./Post.css";

const Post = props => {
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img className="post-img" src={props.post.imageUrl} alt="thumbnail" />
      </div>
      <CommentSection
        comments={props.post.comments}
        postId={props.post.imgeUrl}
      />
    </div>
  );
};

Post.propTypes = {
  psot: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};
export default Post;
