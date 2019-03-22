import React from "react";

import "./Post.css";

const PostHeader = props => {
  return (
    <div className="post-header-wrapper">
      <div className="post-user-img">
        <img
          src={props.thumbnailUrl}
          alt="post-header"
          className="post-thumbnail"
        />
      </div>
      <div className="post-username">{props.username}</div>
    </div>
  );
};

export default PostHeader;
