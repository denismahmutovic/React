import React from "react";
import "./PostItem.css";

const PostItem = ({ title, description }) => {
  return (
    <div className="post-item">
      <prev className="title"> TITLE: {title}</prev>
      <p className="des"> Description: {description}</p>
    </div>
  );
};
export default PostItem;
