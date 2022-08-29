import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PostItem from "./PostItem/PostItem";
const PostList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);
  return (
    <div className="post-list">
      <h1
        style={{
          fontSize: 40,
          color: "#664080",
          textAlign: "center",
        }}
      >
        Posts List
      </h1>
      {items.map((item) => {
        return (
          <PostItem description={item.body} title={item.title} key={item.id} />
        );
      })}
    </div>
  );
};
export default PostList;
