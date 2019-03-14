import React from "react";

import "./Post.css";

const PostHeader = props => {
  return (
    <div>
      <div>
        <img
          src={props.thumbnailUrl}
          alt="post-header"
          className="post-thumbnail"
        />
      </div>
      <div>{props.username}</div>
    </div>
  );
};

export default PostHeader;
