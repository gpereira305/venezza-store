import React, { useEffect } from "react";
import "./store_homepage.css";
import StoreBanner from "../../components/StoreBanner";
import StoreSections from "../../components/common/StoreSections";
import StoreProductGrid from "../../components/StoreProductGrid";
import StoreBlog from "../../components/StoreBlog";
import StoreAdvantages from "../../components/StoreAdVantages";
import StoreBackground from "../../components/StoreBackground";

const StoreHomepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <StoreBanner />
      <StoreSections title="Nova Coleção" subtitle="Novidades" />
      <StoreProductGrid />
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
