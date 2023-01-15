import React, { useState } from "react";
import arrowUp from "../../../assets/icons/arrow-small-up.svg";
import "./store_gotop.css";

const StoreGoTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollTopPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className={`store__gotop-button ${
        visible ? "store__gotop-button--active" : "store__gotop-button"
      }`}
      onClick={scrollTopPage}
    >
      <img src={arrowUp} alt="Seta para cima" title="Voltar ao topo" />
      <p className="store__gotop-button--item">Topo</p>
    </div>
  );
};

export default StoreGoTop;
