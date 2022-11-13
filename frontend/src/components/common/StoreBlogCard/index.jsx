import React from "react";
import "./store_blogcard.css";

const index = ({ post }) => {
  return (
    <article className="store__blog--body">
      <figure className="store__body--image">
        <img src={post.img} alt="User" />
      </figure>
      <h2 className="store__body--title">{post.title}</h2>
      <h3 className="store__body--content">{post.content}</h3>
      <p className="store__body--date">{post.authorAndDate}</p>
    </article>
  );
};

export default index;
