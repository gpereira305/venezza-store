import React from "react";
import "./store_footer.css";
import paperAirplane from "../../assets/icons/paper-airplane.svg";
import { instaposts } from "../../data";
import StoreSocialMedia from "../common/StoreSocialMedia";

// pega o ano atual
const todayDate = new Date().getFullYear();
const index = () => {
  return (
    <footer>
      <div className="store__footer--container store__container">
        <div className="store__footer--info">
          <h3>
            Venezza Store | <span>Promoções todos os dias!</span>
          </h3>

          <form className="store__info--newsletter">
            <input type="email" placeholder="Digite seu e-mail aqui..." />
            <button type="submit">
              inscrever-se
              <img src={paperAirplane} alt="Seta direita" />
            </button>
          </form>

          <h4>Acompanhe-nos em nossas redes sociais</h4>
          <StoreSocialMedia />
        </div>

        <div className="store__footer--gallery">
          <h4>Siga no instagram:</h4>
          <div className="store__gallery--images">
            {instaposts.map(({ img }, i) => (
              <a
                className="store__images--img"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                key={i}
              >
                <img src={img} alt="Post Instagram" />
                <i className="fa-brands fa-instagram" title="Instagram"></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <span className="store__footer--divider store__container"></span>

      <div className="store__footer--copyright">
        <small>&copy; {todayDate} Venezza Store | All rights reserved</small>
      </div>
    </footer>
  );
};

export default index;
