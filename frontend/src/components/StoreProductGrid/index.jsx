import React from "react";
import "./store_product-grid.css";
import StoreProductCard from "../common/StoreProductCard";
import shoppingbag from "../../assets/icons/shopping-bag.svg";
import quicklook from "../../assets/icons/eye.svg";
import StoreSections from "../common/StoreSections";

const StoreProductGrid = ({ products }) => {
  return (
    <div className="store__grid-container">
      <StoreSections title="Nova Coleção" subtitle="Novidades" />
      <div className="store__grid store__container">
        {products.map(
          (product, i) =>
            product.price > 20 && (
              <StoreProductCard
                key={product._id}
                productImage={product.img}
                productPrice={product.price}
                productName={product.name}
                id={product._id}
                bagIcon={shoppingbag}
                eyeIcon={quicklook}
              />
            )
        )}
      </div>
    </div>
  );
};

export default StoreProductGrid;
