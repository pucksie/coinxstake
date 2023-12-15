import React from "react";
import "./StatisticsSection.css";
const StatisticsSection = () => {
  return (
    <section className="statistics">
      <div className="statistics__header">
        <h3>Coinxstake statistics</h3>
        {/* <a href="">View on Etherscan</a> */}
      </div>
      <div className="statistics__box">
        <div className="statistics__box-text">
          <p>Annual percentage rate</p>
          <p className="text-green">109.5%</p>
        </div>
        <div className="statistics__box-text">
          <p>Total staked with Coinxstake</p>
          <p>801,281 USDT</p>
        </div>
        <div className="statistics__box-text">
          <p>Stakers</p>
          <p>1285</p>
        </div>
        {/* <div className="statistics__box-text">
          <p>stMATIC market cap</p>
          <p>$86,774,101</p>
        </div> */}
      </div>
    </section>
  );
};

export default StatisticsSection;
