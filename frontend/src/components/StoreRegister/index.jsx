import React, { useEffect } from "react";
import LoginButton from "../../components/common/StoreButtons/StoreButtonOne";
import { Link } from "react-router-dom";
// import "";

const StoreRegister = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="store__login store__container">
      <section className="store__login--section">
        <h2 className="store__login--title">Cadastre</h2>

        <form className="store__login--form">
          <label htmlFor="">Seu nome</label>
          <input type="text" placeholder="Email" />
          <label htmlFor="">Seu email</label>
          <input type="email" placeholder="Email" />
          <label htmlFor="">Sua Senha</label>
          <input type="password" placeholder="Senha" />

          <LoginButton title={"Login"} type="submit" />
        </form>

        <Link to={"login"}>Já é cadastrado?</Link>
      </section>
    </main>
  );
};

export default StoreRegister;
