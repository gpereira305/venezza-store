import React from "react";
import StoreBlogCard from "../common/StoreBlogCard";
import StoreSections from "../common/StoreSections";
import { blogposts } from "../../data";
import "./store_blog.css";

const index = () => {
  return (
    <div className="customers-blog">
         <StoreSections
            title="Histórias de amor à moda"
            subtitle="Nosso blog de estilo de vida"
         />
         <div className="customers-blog__container store__container">
            {blogposts.map((post, i) => (
               <StoreBlogCard post={post} key={post.id} />
            ))}
         </div>
    </div>
  );
};

export default index;
