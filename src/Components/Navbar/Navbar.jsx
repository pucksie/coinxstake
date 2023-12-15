import React from "react";
import NavItems from "./NavItems/NavItems";
import "./Navbar.css";
import ConnectBtn from "./ConnectBtn/ConnectBtn";
import ThemeBtn from "./ThemeBtn/ThemeBtn";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://pundix.com/_nuxt/img/PUNDIXCHAIN.304864f.svg" alt="" className="navbar-left__image" />
        <NavItems />
      </div>
      <div className="navbar-right">
        <ConnectBtn />
        <ThemeBtn />
      </div>
    </nav>
  );
};

export default Navbar;
