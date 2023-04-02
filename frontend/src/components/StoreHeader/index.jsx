import React, { useEffect, useState } from "react"; 
import { Link, useLocation  } from "react-router-dom"; 
import "./store_header.css";
import shoppingBag from "../../assets/icons/shop-bag.svg";
import user from "../../assets/icons/user.svg";
import close from "../../assets/icons/close.svg"; 

const StoreHeader = ({id}) => {
  const [small, setSmall] = useState(false);
  const [cartActive, setCartActive] = useState(false);   
  
  const { pathname } = useLocation(); 

  useEffect(() => { 
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 60)
      );
    }
  }, []);

    useEffect(() => {
      if (cartActive) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
  }, [cartActive]); 

  const toggleCartOffcanvas = () => {
    return  setCartActive(!cartActive); 
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
              {pathname === '/' && (
               <>
                  <a className="store__links--item"  href="/#new-collection">Novidades</a>
                  <a className="store__links--item"  href="/#sale">Promoções</a>
               </>
              )}
              {pathname === '/cart/undefined' && (
                <small className="store__links--item">Carrinho</small>
              )}
              {pathname === '/product/undefined' && (
                <small className="store__links--item">Detalhe do produto</small>
              )}
            </div>
            <span className="store__navbar--overlay"></span>
            <div className="store__navbar--user"> 
              <img className="store__user--login" onClick={toggleCartOffcanvas} src={user} alt="usuário" title="Usuário" />
              <Link to={`/cart/${id}`}>
                 <img className="store__user--bag" src={shoppingBag} alt="Sacola" title="Sacola"/> 
              </Link>
            </div>
          </div> 
        </div>
      </nav>
      
      {/* cart / user links */}
      <div className={`store__header--overlay ${cartActive ? "offcanvas-active" : "store__header--overlay"}`} onClick={toggleCartOffcanvas}></div>
      <div className={`store__header--cart ${cartActive ? "offcanvas-active" : "store__header--cart"}`}>
          <div className="store__cart--header">
              <img onClick={toggleCartOffcanvas} src={close} alt="Fechar" title="Fechar Carrinho"/>
              <h1 className="store__header--title">Seu Carrinho</h1>
              <span></span>
          </div> 

            <div> 
               <h3>menu</h3>
            </div> 
      </div>  
    </header>
  );
};

export default StoreHeader;
