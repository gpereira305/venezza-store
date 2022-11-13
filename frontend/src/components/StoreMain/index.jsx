import React from "react";
import "./store_main.css";
import StoreBanner from "../StoreBanner";
import StoreSections from "../common/StoreSections";
import StoreProductGrid from "../StoreProductGrid";
import StoreBlog from "../StoreBlog";
import StoreAdvantages from "../StoreAdVantages";
import StoreBackground from "../StoreBackground";

const index = () => {
  return (
    <main className="store__main">
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

export default index;
