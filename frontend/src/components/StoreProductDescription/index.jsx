import React from "react";
import AddButton from "../common/StoreButtons/StoreButtonOne";
import StoreSocialMedia from "../common/StoreSocialMedia";

const index = () => {
  return (
    <article className="store__product-details--description">
      <h1>BLUSA DALTEX</h1>
      <h2>R$ 39.99</h2>

      <span></span>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, illum
        eum officiis ex consectetur vero nobis ullam, natus, iusto
        necessitatibus iure voluptatibus. Quia est adipisci officia porro
        perspiciatis voluptas laborum ad eius totam nam alias at, iure
        reprehenderit labore architecto cumque. Laborum praesentium odio
        possimus consequuntur laudantium minima ex magni exercitationem quisquam
        accusamus asperiores
      </p>
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
      <span></span>
      <StoreSocialMedia />
    </article>
  );
};

export default index;
