import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AddButton from "../../components/common/StoreButtons/StoreButtonOne";
import StoreSocialMedia from "../../components/common/StoreSocialMedia";
import exit from "../../assets/icons/exit-icon.svg";
import "./store_details-page.css";

const StoreProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${params.id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [params]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="store__product-details">
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
          {product.countInStock > 0 ? (
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
    </div>
  );
};

export default StoreProductDetails;
