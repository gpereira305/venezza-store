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
      <div className={`gotop-button ${ visible
         ? "gotop-button__active"
         : "gotop-button"
         }`} onClick={scrollTopPage}
      >
           <img src={arrowUp} alt="Seta para cima" title="Voltar ao topo" />
           <p className="gotop-button__item">Topo</p>
      </div>
  );
};

export default StoreGoTop;
