import React, { useEffect, useState } from "react";
import axios from "axios";
import StoreBanner from "../../components/StoreBanner";
import StoreProductGrid from "../../components/StoreProductGrid";
import StoreUserComments from "../../components/StoreUserComments";
import StoreBlog from "../../components/StoreBlog";
import StoreAdvantages from "../../components/StoreAdvantages";
import StoreBackground from "../../components/StoreBackground";
import "./store_homepage.css";

const StoreHomepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // manter a navegação no topo ao trocar de página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <StoreBanner />
      <StoreProductGrid products={products} />
      <StoreUserComments />
      <StoreAdvantages />
      <StoreBackground />
      <StoreBlog />
    </main>
  );
};

export default StoreHomepage;
