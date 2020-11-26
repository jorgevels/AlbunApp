import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";

import app from "../config/base";
import "../styles/Login.css";
import { AuthContext } from "../containers/Auth";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/photos");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/photos" />;
  }

  return (
    <section className="login">
      <section className="login__container">
        <h2>Iniciar Sesión</h2>
        <form className="login__container--form" onSubmit={handleLogin}>
          <input
            className="input"
            name="email"
            type="text"
            placeholder="Correo"
          />

          <input
            className="input"
            name="password"
            type="password"
            placeholder="Contraseña"
          />
          <button className="button">Iniciar sesión</button>
        </form>
      </section>
    </section>
  );
};

export default withRouter(Login);
