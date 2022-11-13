import React from "react";
import "./store_footer.css";
import arrowRight from "../../assets/icons/arrow-small-right.svg";
import { instaposts, socials } from "../../data";

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
              <img src={arrowRight} alt="Seta direita" />
            </button>
          </form>

          <h4>Acompanhe-nos em nossas redes sociais</h4>
          <div className="store__info--social-links">
            {socials.map((social, i) => (
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
              >
                <i className={social.name} title={social.title}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="store__footer--gallery">
          <h4>Siga no instagram:</h4>
          <div className="store__gallery--images">
            {instaposts.map(({ img, i }) => (
              <div className="store__images--img" key={i}>
                <img src={img} alt="Post Instagram" />
                <i className="fa-brands fa-instagram" title="Instagram"></i>
              </div>
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
