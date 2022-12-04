import React, { useEffect } from "react";
import LoginButton from "../../components/common/StoreButtons/StoreButtonOne";
import { Link } from "react-router-dom";
// import "./store_user.css";

const StoreLogin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="store__login store__container">
      <section className="store__login--section">
        <h2 className="store__login--title">Faça o login</h2>

        <form className="store__login--form">
          <label htmlFor="">Seu email</label>
          <input type="email" placeholder="Email" />
          <label htmlFor="">Sua Senha</label>
          <input type="password" placeholder="Senha" />

          <LoginButton title={"Cadastrar"} type="submit" />
        </form>

        <Link to={"/register"}>Não é cadastrado?</Link>
      </section>
    </main>
  );
};

export default StoreLogin;
