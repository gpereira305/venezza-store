import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./store_header.css";
import shoppingBag from "../../assets/icons/shop-bag.svg";
import user from "../../assets/icons/user.svg";
import close from "../../assets/icons/close.svg";

const StoreHeader = () => {
  const [small, setSmall] = useState(false);
  // const [toggle, setToggle] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 60)
      );
    }
  }, []);

    useEffect(() => {
      if (menuActive) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
  }, [menuActive]);

  const menuToggleActive = () => {
    setMenuActive(!menuActive);
  }; 

  return (
    <header className="store__header">
      <nav className={`store__navbar ${small ? "store__sticky-header" : ""}`}>
        <div className="store__container">
          <Link className="store__navbar--logo" to={"/"} title="Logo">
            Venezza
          </Link>

          <div className="store__navbar--link">
            <div className="store__navbar--links">
              <a href="/#new-collection">Novidades</a>
              <a href="/#sale">Promoções</a>
            </div>
            <span className="store__navbar--overlay"></span>
            <div className="store__navbar--user"> 
              <img className="store__user--login" src={user} alt="usuário" title="Usuário" />
              <img className="store__user--bag" onClick={menuToggleActive} src={shoppingBag} alt="Sacola" title="Sacola"/> 
            </div>
          </div> 
        </div>
      </nav>

      <div className={
          `store__header--overlay ${menuActive ? 
           "cart-toggle" : 
           "store__header--overlay"}`
          } onClick={menuToggleActive}></div>
      <div className={`store__header--cart ${menuActive ? "cart-toggle" : "store__header--cart"}`}>
          <div className="store__cart--header">
              <img onClick={menuToggleActive} className="" src={close} alt="Fechar" title="Fechar Carrinho"/>
              <h1 className="store__header--title">Seu Carrinho</h1>
              <span></span>
          </div> 
          <div>
              <div>
                 
              </div>
          </div>
      </div> 
    </header>
  );
};

export default StoreHeader;
