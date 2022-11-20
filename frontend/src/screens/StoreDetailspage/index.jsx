import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StoreProductImage from "../../components/StoreProductImage";
import StoreProductDescription from "../../components/StoreProductDescription";
import "./store_detailspage.css";
import exit from "../../assets/icons/exit-icon.svg";

const StoreDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="store__product-details store__container">
      <Link to={"/"} className="store__product-details--goback">
        <img src={exit} alt="" />
        Voltar
      </Link>
      <article className="store__product-details--wrapper">
        <StoreProductImage />
        <StoreProductDescription />
      </article>
    </main>
  );
};

export default StoreDetails;
