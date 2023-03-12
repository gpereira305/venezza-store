import React from "react";
import { Link } from "react-router-dom";

const index = ({
  productImage,
  productPrice,
  productName,
  bagIcon,
  eyeIcon,
  id,
}) => {
  return (
    <article className="store__grid--item">
      {productPrice < 20 && <span>Promoção</span>}
      <small className="store__grid--price">R$ {productPrice}</small>
      <img className="store__item--img" src={productImage} alt="" />
      <p className="store__item--title">{productName}</p>

      <div className="store__item--icons">
        <Link to={`/cart/${id}`}>
          <img src={bagIcon} alt="Sacola" title="Carrinho" />
        </Link>
        <Link to={`/product/${id}`}>
          <img src={eyeIcon} alt="olho" title="Espiar" />
        </Link>
      </div>
    </article>
  );
};

export default index;
