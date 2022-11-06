import React from "react";
import StoreButtonOne from "../common/StoreButtons/StoreButtonOne";
import "./store_background.css";

const index = () => {
  return (
    <div className="store__background">
      <div className="store__background--cta">
        <h2>Promoções todos os dias!</h2>
        <StoreButtonOne title={"confira"} />
      </div>
    </div>
  );
};

export default index;
