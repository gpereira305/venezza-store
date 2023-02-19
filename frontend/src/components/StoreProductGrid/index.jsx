import React from "react";
import "./store_product-grid.css";
import StoreProductCard from "../common/StoreProductCard";
import shoppingbag from "../../assets/icons/shopping-bag.svg";
import quicklook from "../../assets/icons/eye.svg";
import StoreSections from "../common/StoreSections";
import StoreLoader from "../StoreMessages/StoreLoader";
import StoreMessage from "../StoreMessages/StoreMessage";

const StoreProductGrid = ({ products, loading, error }) => { 
  return (
    <section className="store__grid-container" id="new-collection">
      <StoreSections title="Nova Coleção" subtitle="Novidades" /> 
        <div className="store__grid store__container">
          {loading ? (
            <StoreLoader/>
          ): error ? (
            <StoreMessage variant={'danger'}>{error}</StoreMessage>
          ): (
           <>
            {products.map(product =>
              product.price > 20 && (
                <StoreProductCard
                  key={product._id} productImage={product.image}
                  productPrice={product.price} productName={product.name}
                  id={product._id} bagIcon={shoppingbag} eyeIcon={quicklook}
                />
              ))}
           </>
          )} 
        </div> 
    </section>
  );
};

export default StoreProductGrid;
