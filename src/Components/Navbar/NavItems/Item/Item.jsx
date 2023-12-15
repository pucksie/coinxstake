import React from "react";
import "./Item.css";
const Item = ({ text, icon, isActive }) => {
  return (
    <div
      className={
        isActive
          ? "navbar-left__container-item active"
          : "navbar-left__container-item"
      }>
      {/* <img src={icon} alt="icon" /> */}
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default Item;
