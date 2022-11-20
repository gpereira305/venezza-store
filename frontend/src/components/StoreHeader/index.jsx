import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./store_header.css";
import hamburger from "../../assets/icons/burger.svg";

const StoreHeader = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 60)
      );
    }
  }, []);

  return (
    <header className="store__header">
      <div className={`store__navbar ${small ? "store__sticky-header" : ""}`}>
        <div className="store__container">
          <Link to={"/"} className="store__navbar--logo" title="Logo">
            Venezza
          </Link>
          <nav className="store__navbar--nav">
            <ul>
              <li>Novidades</li>
              <li>Promoções</li>
              <li>Blog</li>
              <li>Login</li>
              <li>Carrinho</li>
            </ul>
            <img className="store__hamburger" src={hamburger} alt="hamburger" />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default StoreHeader;
