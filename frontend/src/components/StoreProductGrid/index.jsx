import React from "react";
import "./store_product-grid.css";
import { products } from "../../data";
import StoreProductCard from "../common/StoreProductCard";
import shoppingbag from "../../assets/icons/shopping-bag.svg";
import quicklook from "../../assets/icons/eye.svg";

const index = () => {
  return (
    <div className="store__grid-container">
      <div className="store__grid store__container">
        {products.map((product, i) => (
          <StoreProductCard
            key={i}
            productImage={product.img}
            productPrice={product.price}
            productName={product.name}
            id={product._id}
            bagIcon={shoppingbag}
            eyeIcon={quicklook}
          />
        ))}
      </div>
    </div>
  );
};

export default index;
