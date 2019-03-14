import React from "react";
import PostHeader from "./PostHeader";
import CommentSection from "../CommentSection/CommentSection";
import "./Post.css";

const Post = props => {
  return (
    <div className="post-border">
      <div className="post-image-wrapper">
        <PostHeader
          username={props.post.username}
          thumbnailUrl={props.post.thumbnailUrl}
        />
        <img className="post-img" src={props.post.imageUrl} alt="thumbnail" />
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;
