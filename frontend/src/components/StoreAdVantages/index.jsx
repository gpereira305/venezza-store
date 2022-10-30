import React from "react";
import truck from "../../assets/icons/truck.svg";
import dollarSign from "../../assets/icons/currency-dollar.svg";
import phone from "../../assets/icons/phone-arrow-up-right.svg";

import "./store_advantages.css";

const index = () => {
  return (
    <div className="store__advantages">
      <div className="store__advantages--container  ">
        <div className="store__advantages--card-body">
          <img src={truck} alt="Frete" />
          <h2 className="store__card-body--title">Frete & retorno grátis</h2>
          <p className="store__card-body--content">
            Frete grátis para todo o país
          </p>
        </div>

        <div className="store__advantages--card-body">
          <img src={dollarSign} alt="Frete" />
          <h2 className="store__card-body--title">Compra garantida</h2>
          <p className="store__card-body--content">30 dias de garantia</p>
        </div>

        <div className="store__advantages--card-body">
          <img src={phone} alt="Frete" />
          <h2 className="store__card-body--title">Suporte online</h2>
          <p className="store__card-body--content">
            Todo o suporte disponível 24h
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
