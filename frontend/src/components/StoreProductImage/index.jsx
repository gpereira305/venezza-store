import React from "react";
import productImage from "../../assets/images/products/product-01.jpg";

const index = () => {
  return (
    <figure className="store__product-details--image">
      <img src={productImage} alt="" />
    </figure>
  );
};

export default index;
