import React from "react";
import { Nav, NavLink, Link } from "./styles";
/* import { Nav, Link } from "./styles"; */

// Se importan los iconos desde react icons

import { FaBookOpen, FaBook } from "react-icons/fa";
import { AiOutlineRead } from "react-icons/ai";
import { ImBook } from "react-icons/im";

// constante con el tamaño de los iconos
const SIZE = "32px";
const SIZES = "25px";
const SIZEZ = "28px";
const COLOR = "red";

const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <ImBook size={SIZES} />
      </Link>
      <NavLink to="/daily">
        <AiOutlineRead size={SIZE} />
      </NavLink>
      <NavLink to="/photos">
        <FaBookOpen size={SIZEZ} />
      </NavLink>
    </Nav>
  );
};
export default NavBar;
