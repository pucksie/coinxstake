import React from "react";
import "./ThemeBtn.css";
import { BiSolidMoon } from "react-icons/bi";
const ThemeBtn = () => {
  return (
    <button type="button" className="navbar-right__theme">
      <BiSolidMoon className="navbar-right__theme-icon" />
    </button>
  );
};

export default ThemeBtn;
