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
    <article className="product-card">
      {productPrice < 20 && <span>Promoção</span>}
      <small className="product-card__price">R$ {productPrice}</small>
      <img className="product-card__img"
         src={productImage}
         alt={productName}
         title={productName}
      />
      <p className="product-card__title">
        {productName}
      </p>

      <div className="product-card__icons">
        <Link className="product-card__icons-link" to={`/cart/${id}`}>
          <img className="product-card__icons-item"
             src={bagIcon} alt="Sacola"
             title="Carrinho"
          />
        </Link>
        <Link className="product-card__icons-link" to={`/product/${id}`}>
          <img className="product-card__icons-item"
             src={eyeIcon} alt="olho"
             title="Espiar"
          />
        </Link>
      </div>
    </article>
  );
};

export default index;
