import React, { useCallback } from "react";
import { withRouter } from "react-router";
import "./Register.css";
import app from "../../config/base";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <section className="register">
      <section className="register__container">
        <h2>Registrate</h2>
        <form className="register__container--form" onSubmit={handleSignUp}>
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
          <button className="button">Registrarme</button>
        </form>
      </section>
    </section>
  );
};

export default withRouter(SignUp);
