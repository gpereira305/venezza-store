import React from "react";
import StoreButtonOne from "../common/StoreButtons/StoreButtonOne";
import "./store_background.css";

const index = () => {
  return (
    <div className="promo-background">
         <div className="promo-background__message">
            <h2 className="promo-background__message--content">
               Promoções todos os dias!
            </h2>
            <StoreButtonOne title={"confira"} />
         </div>
    </div>
  );
};

export default index;
