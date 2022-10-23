import React from "react";
import "./store_main.css";
import StoreBanner from "../StoreBanner";
import StoreSections from "../common/StoreSections";
import StoreProductGrid from "../StoreProductGrid";

const index = () => {
  return (
    <main className="store__main">
      <StoreBanner />
      <StoreSections />
      <StoreProductGrid />
    </main>
  );
};

export default index;
