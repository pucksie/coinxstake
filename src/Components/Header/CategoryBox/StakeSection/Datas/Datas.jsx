import React from "react";
import "./Datas.css";
const Datas = ({amount}) => {
  return (
    <div className="data-container">
      <div className="data_box">
        <p className="text-data">You are staking </p>
        <p>{amount} {"USDT" }</p>
      </div>
      {/* <div className="data_box">
        <p className="text-data">Exchange rate</p>
        <p>1 MATIC = 0.9218 stMATIC</p>
      </div> */}
      <div className="data_box">
        <p className="text-data">APR</p>
        <p>12%</p>
      </div>
      <div className="data_box">
        <p className="text-data">Staking fee</p>
        <p>3%</p>
      </div>
    </div>
  );
};

export default Datas;
