import React from "react";
import Item from "./Item/Item";
import "./NavItems.css";
const NavItems = () => {
  return (
    <div className="navbar-left__container">
      <Item
        isActive={true}
        text={"stake"}
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.988 9.05a1 1 0 01.89.55 1 1 0 01-.08 1.04l-8 11a1 1 0 01-1.81-.59v-6h-5a1 1 0 01-.89-.64 1 1 0 01.08-1l8-11a1 1 0 011.12-.36 1 1 0 01.69 1v6h5zm-7 5v3.92l5-6.92h-4a1 1 0 01-1-1V6.13l-5 6.92h4a1 1 0 011 1z"></path>
          </svg>
        }
      />
      <Item
        isActive={false}
        text={"rewards"}
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.4 7.6h.9a2.7 2.7 0 012.7 2.7v7.2a2.7 2.7 0 01-2.7 2.7H5.7A2.7 2.7 0 013 17.5V6.7A2.7 2.7 0 015.7 4h9a2.7 2.7 0 012.7 2.7v.9zm-2.7-1.8h-9a.9.9 0 100 1.8h9.9v-.9a.9.9 0 00-.9-.9zm4.5 9h-.9a.9.9 0 110-1.8h.9v1.8zm-.9-3.6h.9v-.9a.9.9 0 00-.9-.9H5.7a2.7 2.7 0 01-.9-.153V17.5a.9.9 0 00.9.9h12.6a.9.9 0 00.9-.9v-.9h-.9a2.7 2.7 0 010-5.4z"></path>
          </svg>
        }
      />
      <Item
        isActive={false}
        text={"defi"}
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.92 15.48A4 4 0 0118 14a4 4 0 11-4 4c.004-.239.027-.476.07-.71l-5.28-2.43a4 4 0 110-5.72l5.28-2.43a4 4 0 11.85 1.81l-5.1 2.35a3.64 3.64 0 010 2.26l5.1 2.35zM20 6a2 2 0 10-4 0 2 2 0 004 0zM6 14a2 2 0 110-4 2 2 0 010 4zm10 4a2 2 0 104 0 2 2 0 00-4 0z"></path>
          </svg>
        }
      />
    </div>
  );
};

export default NavItems;
