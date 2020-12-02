import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./menu.scss";
import app from "../../config/base";

const Menu = (props) => {
  //Inicializando estado con useState()
  const [title, setTitle] = useState("menu-close");
  const [menuTexto, setMenuTexto] = useState("no-visible");

  //Handlers
  const handleMenu = () => {
    title === "menu-close" ? setTitle("menu-open") : setTitle("menu-close");
    menuTexto === "no-visible"
      ? setMenuTexto("visible")
      : setMenuTexto("no-visible");
    props.data === "container-blur"
      ? props.blur("container")
      : props.blur("container-blur");
  };

  return (
    <div>
      <div className="menu-container" onClick={handleMenu}>
        <div className={title} />
      </div>
      <div className={`${menuTexto}1`}>
        <div className="link" onClick={() => app.auth().signOut()}>
          <Link to="/login">
            <div className="link">Salir</div>
          </Link>
        </div>
      </div>
      {/* <div className={`${menuTexto}2`}>
        <div className="link">Developing</div>
      </div>
      <div className={`${menuTexto}3`}>
        <div className="link">Developing</div>
      </div>
      <div className={`${menuTexto}4`}>
        <div className="link">Developing</div>
      </div> */}
    </div>
  );
};

export default Menu;
