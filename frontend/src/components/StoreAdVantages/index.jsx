import React from "react";
import truck from "../../assets/icons/truck.svg";
import dollarSign from "../../assets/icons/currency-dollar.svg";
import phone from "../../assets/icons/phone-arrow-up-right.svg";

import "./store_advantages.css";

const index = () => {
  return (
    <div className="buying-advantages">
      <div className="buying-advantages__container">
        <div className="content-block">
            <img className="content-block__img"
               src={truck} alt="Frete"
               title="Frete"
            />
            <h2 className="content-block__title">
               Frete & retorno grátis
            </h2>
            <p className="content-block__message">
               Frete grátis para todo o país
            </p>
        </div>

        <div className="content-block">
            <img className="content-block__img"
               src={dollarSign} alt="Garantia de compra"
               title="Garantia de compra"
            />
            <h2 className="content-block__title">
               Compra garantida
            </h2>
            <p className="content-block__message">
               30 dias de garantia
            </p>
        </div>

        <div className="content-block">
            <img className="content-block__img"
               src={phone} alt="Suporte online"
               title="Suporte online"
            />
            <h2 className="content-block__title">Suporte online</h2>
            <p className="content-block__message">
               Todo o suporte disponível 24h
            </p>
        </div>
      </div>
    </div>
  );
};

export default index;
