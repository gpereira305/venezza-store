import React, { useEffect, useState } from "react";
import axios from "axios";
import "./store_homepage.css";
import StoreBanner from "../../components/StoreBanner";
import StoreSections from "../../components/common/StoreSections";
import StoreProductGrid from "../../components/StoreProductGrid";
import StoreBlog from "../../components/StoreBlog";
import StoreAdvantages from "../../components/StoreAdvantages";
import StoreBackground from "../../components/StoreBackground";

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
      <StoreSections title="Nova Coleção" subtitle="Novidades" />
      <StoreProductGrid products={products} />
      <StoreSections
        title="Histórias de amor à moda"
        subtitle="Nosso blog de estilo de vida"
      />
      <StoreBlog />
      <StoreAdvantages />
      <StoreBackground />
    </main>
  );
};

export default StoreHomepage;
