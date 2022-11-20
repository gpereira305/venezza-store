import React from "react";
import { socials } from "../../../data";
import "./store_social-media.css";

const index = () => {
  return (
    <div className="store__info--social-links">
      {socials.map(({ link, name, title }, i) => (
        <a href={link} target="_blank" rel="noopener noreferrer" key={i}>
          <i className={name} title={title}></i>
        </a>
      ))}
    </div>
  );
};

export default index;
