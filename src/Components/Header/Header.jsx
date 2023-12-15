import React, { useState, useRef, useEffect } from "react";
import CategoryBox from "./CategoryBox/CategoryBox";
import "./Header.css";
const Header = () => {
  const [category, setCategory] = useState(0);
  const markerRef = useRef(null);
  useEffect(() => {
    category == 0 && (markerRef.current.style.left = "2px");
    category == 1 && (markerRef.current.style.left = "90px");
    category == 2 && (markerRef.current.style.left = "180px");
  }, [category]);
  return (
    <header className="header">
      <h1 className="header-heading">Welcome to Coinxstake</h1>
      <p className="header-text">
        Stake your coins and earn rewards. You can unstake your coins at any time
      </p>
      <div className="header-container_category">
        <div className="header-container_category-marker" ref={markerRef}></div>
        <p
          onClick={() => setCategory(0)}
          className={
            category == 0
              ? "header-container_category-text active"
              : "header-container_category-text"
          }>
          STAKE
        </p>
        <p
          onClick={() => setCategory(1)}
          className={
            category == 1
              ? "header-container_category-text active"
              : "header-container_category-text"
          }>
          UNSTAKE
        </p>
        <p
          onClick={() => setCategory(2)}
          className={
            category == 2
              ? "header-container_category-text active"
              : "header-container_category-text"
          }>
          CLAIM
        </p>
      </div>
      <CategoryBox catName={category} />
    </header>
  );
};

export default Header;
