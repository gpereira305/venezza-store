import React from "react";
import StoreBanner from "../StoreBanner";
import "./store_main.css";

import StoreSections from "../common/StoreSections";

const index = () => {
  return (
    <main className="store__main">
      <StoreBanner />
      <StoreSections />
    </main>
  );
};

export default index;
