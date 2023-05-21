import React from "react";
import mainBanner from "../../assets/images/banner-img.jpg";

const index = () => {
  return (
    <figure className="banner">
        <img className="banner-image"
          src={mainBanner} alt="Banner da loja"
          title="Banner da loja"
        />
    </figure>
  );
};

export default index;
