import React from "react";
import { Nav, NavLink, Link } from "./styles";
/* import { Nav, Link } from "./styles"; */

// Se importan los iconos desde react icons
import { MdHome, MdPersonOutline } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";

// constante con el tamaño de los iconos
const SIZE = "32px";
const COLOR = "red";

const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <MdHome size={SIZE} />
      </Link>
      <NavLink to="/photos">
        <FaBookOpen size={SIZE} />
      </NavLink>
      {/* <NavLink to="/prueba">
        <MdPersonOutline size={SIZE} />
      </NavLink> */}
    </Nav>
  );
};
export default NavBar;
