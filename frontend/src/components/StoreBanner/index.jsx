import React from "react";
import mainBanner from "../../assets/images/banner-img.jpg";
import StoreButtonOne from "../common/StoreButtons/StoreButtonOne";

const index = () => {
  return (
    <figure className="banner">
        <img className="banner-image" src={mainBanner} alt="banner" />
        <div className="banner-wrapper">
            <div className="banner-title">
                <h1 className="banner-title__text">Nova Coleção de verão</h1>
                <StoreButtonOne title="Coleção verão" />
            </div>
        </div>
    </figure>
  );
};

export default index;
