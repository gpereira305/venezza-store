import React from "react";
import mainBanner from "../../assets/images/banner-img.jpg";
import StoreButtonOne from "../common/StoreButtons/StoreButtonOne";

const index = () => {
  return (
    <div className="store__main-banner">
      <img src={mainBanner} alt="" />
      <div className="store__main-banner--title">
        <span className="store__container">
          <h1>Nova Coleção de verão</h1>
          <StoreButtonOne title="Coleção verão" />
        </span>
      </div>
    </div>
  );
};

export default index;
