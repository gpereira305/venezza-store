import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./store_detailspage.css";
import { products } from "../../data";
import AddButton from "../../components/common/StoreButtons/StoreButtonOne";
import StoreSocialMedia from "../../components/common/StoreSocialMedia";
import exit from "../../assets/icons/exit-icon.svg";

const StoreDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => String(p._id) === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="store__product-details store__container">
      <Link to={"/"} className="store__product-details--goback">
        <img src={exit} alt="Sair" />
        Voltar
      </Link>

      <article className="store__product-details--wrapper">
        <figure className="store__product-details--image">
          <img src={product.img} alt={product.name} title={product.name} />
        </figure>
        <article className="store__product-details--description">
          <h1>{product.name}</h1>
          <h2>R$ {product.price}</h2>
          <span></span>
          <p>{product.desc}</p>
          {product.stockCount > 0 ? (
            <form className="store__description--action-select">
              <select name="" id="">
                <option value="Selecione">Selecione</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <AddButton title={"adicionar ao carrinho"} type="submit" />
            </form>
          ) : (
            <button className="store__disable-button" disabled>
              Sem estoque
            </button>
          )}
          <span></span>
          <StoreSocialMedia />
        </article>
      </article>
    </main>
  );
};

export default StoreDetails;
