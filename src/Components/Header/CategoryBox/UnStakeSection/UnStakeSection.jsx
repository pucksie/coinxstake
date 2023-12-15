import React, { useState } from "react";
import "./UnStakeSection.css";
import Lido from "./Lido/Lido";
import Kyberswap from "./Kyberswap/Kyberswap";
const UnStakeSection = ({amount, setAmount}) => {
  const [isActive, setIsActive] = useState(0);
  return (
    <div className="unstake">
      <div className="unstake-data_container">
        <div
          className={
            isActive == 0 ? "unstake-data_box active" : "unstake-data_box"
          }
          onClick={() => setIsActive(0)}>
          <div className="unstake-data_box-text">
            <p className="text-black">Use Coinxstake</p>
            <img src="/waterDrop.svg" alt="" />
          </div>
          
          <div className="unstake-data_box-text">
            <p>Approximate Unstake time:</p>
            <p>~ 3 Seconds</p>
          </div>
        </div>
        {/* <div
          className={
            isActive == 1 ? "unstake-data_box active" : "unstake-data_box"
          }
          onClick={() => setIsActive(1)}>
          <div className="unstake-data_box-text">
            <p className="text-black">Use aggregators</p>
            <img src="/cyberSwap.svg" alt="" />
          </div>
          <div className="unstake-data_box-text">
            <p>Best Rate:</p>
            <p>1 : 1.0702</p>
          </div>
          <div className="unstake-data_box-text">
            <p>Waiting time:</p>
            <p>~ 1-3 minutes</p>
          </div>
        </div> */}
      </div>
      {isActive == 0 && <Lido amount={amount} setAmount={setAmount}/>}
      {isActive == 1 && <Kyberswap />}
    </div>
  );
};

export default UnStakeSection;
