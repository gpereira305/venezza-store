import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./store_header.css";
import shoppingBag from "../../assets/icons/shop-bag.svg";
import user from "../../assets/icons/user.svg";
import hamburger from "../../assets/icons/burger.svg";

const StoreHeader = () => {
  const [small, setSmall] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 60)
      );
    }
  }, []);

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

          <div
            className={`store__navbar--link ${
              menuActive ? "store__link--active" : "store__navbar--link"
            }`}
          >
            <div className="store__navbar--links">
              <a href="/#new-collection">Novidades</a>
              <a href="/#sale">Promoções</a>
            </div>
            <span className="store__navbar--overlay"></span>
            <div className="store__navbar--user">
              <img
                className="store__user--bag"
                src={shoppingBag}
                alt="Sacola"
                title="Sacola"
              />
              <img
                className="store__user--login"
                src={user}
                alt="usuário"
                title="Usuário"
              />
            </div>
          </div>
          <img
            onClick={menuToggleActive}
            className="store__user--burger"
            src={hamburger}
            alt="hamburger"
          />
        </div>
      </nav>
    </header>
  );
};

export default StoreHeader;
