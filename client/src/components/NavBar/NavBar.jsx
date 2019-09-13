import React from "react";
import { Nav, SocialMedia } from "./NavBar.styles";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
import { ReactComponent as Insta } from "../../assets/icons/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";

const NavBar = () => {
  return (
    <Nav>
      <div>
        <img className="logo" src={Logo} alt="" />
      </div>
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
          {" "}
          <Link to="/about">Booking</Link>
        </li>
      </ul>
      <SocialMedia>
        <Insta />
        <Facebook />
      </SocialMedia>
    </Nav>
  );
};

export default NavBar;
