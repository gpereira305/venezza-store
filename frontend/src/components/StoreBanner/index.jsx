import React from "react";
import mainBanner from "../../assets/images/banner-img.jpg";
import StoreButtonOne from "../common/StoreButtons/StoreButtonOne";

const index = () => {
  return (
    <figure className="banner">
        <img className="banner__image" src={mainBanner} alt="banner" />
        <div className="banner__banner--title">
            <div className="banner__title--container">
                <h1 className="banner__title--text">Nova Coleção de verão</h1>
                <StoreButtonOne title="Coleção verão" />
            </div>
        </div>
    </figure>
  );
};

export default index;
