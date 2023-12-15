import React, { useState } from "react";
import "./Faq.css";
import FaqBox from "./FaqBox/FaqBox";
const Faq = () => {
  return (
    <div className="faq">
      <FaqBox
        question={"What is Coinxstake on BSC?"}
        answer={
          "CoinXstake is a leading staking platform on BSC network. Earn APY by staking usdt"
        }
      />
      {/* <FaqBox
        question={"What is Coinxstake on BSC?"}
        answer={
          "Coinxstake on BSC is a liquid staking solution for MATIC backed by industry-leading staking providers. Coinxstake lets users earn MATIC staking rewards without needing to maintain infrastructure and enables them to trade staked positions, as well as participate in on-chain decentralized finance with their staked assets. Coinxstake on BSC gives users options to:"
        }
      /> */}
    </div>
  );
};

export default Faq;
