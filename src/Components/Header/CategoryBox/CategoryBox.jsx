import React from "react";
import "./CategoryBox.css";
import StakeSection from "./StakeSection/StakeSection";
import UnStakeSection from "./UnStakeSection/UnStakeSection";
import ClaimSection from "./ClaimSection/ClaimSection";
import { useState } from "react";
const CategoryBox = ({ catName }) => {
  const [amount , setAmount] = useState(0);
  console.log(catName);
  return (
    <div className="header-catagory">
      {catName == 0 && <StakeSection amount={amount} setAmount={setAmount}/>}
      {catName == 1 && <UnStakeSection setAmount={setAmount} amount={amount}/>}
      {catName == 2 && <ClaimSection />}
    </div>
  );
};

export default CategoryBox;
