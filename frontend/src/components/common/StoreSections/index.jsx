import React from "react";
import "./StoreSections.css";

const index = ({ title, subtitle }) => {
  return (
    <div className="store__section">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </div>
  );
};

export default index;
