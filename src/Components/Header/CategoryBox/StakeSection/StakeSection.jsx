import React from "react";
import "./StakeSection.css";
import Form from "./Form/Form";
import Discount from "./Discount/Discount";
import Datas from "./Datas/Datas";
const StakeSection = ({setAmount, amount}) => {
  return (
    <>
      <Form setAmount={setAmount} amount={amount} />
      {/* <Discount amount={amount}/> */}
      <Datas amount={amount} />
    </>
  );
};

export default StakeSection;
