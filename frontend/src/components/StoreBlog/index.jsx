import React from "react";
import { blogposts } from "../../data";
import StoreBlogCard from "../common/StoreBlogCard";
import "./store_blog.css";

const index = () => {
  return (
    <div className="store__blog">
      <div className="store__blog-container store__container">
        {blogposts.map((post, i) => (
          <StoreBlogCard post={post} key={i} />
        ))}
      </div>
    </div>
  );
};

export default index;
