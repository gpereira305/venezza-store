import React from "react";

const index = ({
  productImage,
  productPrice,
  productName,
  bagIcon,
  eyeIcon,
}) => {
  return (
    <article className="store__grid--item">
      {productPrice < 20 && <span>Promoção</span>}
      <small className="store__grid--price">R$ {productPrice}</small>
      <img className="store__item--img" src={productImage} alt="" />
      <p className="store__item--title">{productName}</p>

      <div className="store__item--icons">
        <span>
          <img src={bagIcon} alt="Sacola" title="Carrinho" />
        </span>
        <span>
          <img src={eyeIcon} alt="olho" title="Espiar" />
        </span>
      </div>
    </article>
  );
};

export default index;
