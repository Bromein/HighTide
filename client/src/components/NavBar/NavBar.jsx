import React from "react";
import { Nav } from "./NavBar.styles";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
const NavBar = () => {
  return (
    <Nav>
      <img src={Logo} alt={"HighTide Logo"} />

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/art">Art</Link>
        </li>
        <li>
          <Link to="/art">Booking</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default NavBar;
