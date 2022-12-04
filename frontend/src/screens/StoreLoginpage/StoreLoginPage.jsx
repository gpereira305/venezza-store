import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LoginButton from "../../components/common/StoreButtons/StoreButtonOne";

const StoreLoginPage = ({ title, name, email, password, link }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="store__login store__container">
      <section className="store__login--section">
        <h2 className="store__login--title">{title}</h2>

        <form className="store__login--form">
          <label htmlFor="">{name}</label>
          <input type="text" placeholder="Email" />
          <label htmlFor="">{email}</label>
          <input type="email" placeholder="Email" />
          <label htmlFor="">{password}</label>
          <input type="password" placeholder="Senha" />

          <LoginButton title={"Login"} type="submit" />
        </form>

        <Link to={"login"}>{link}</Link>
      </section>
    </main>
  );
};

export default StoreLoginPage;
