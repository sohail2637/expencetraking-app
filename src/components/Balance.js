import React, { useContext } from "react";
import { GlobalContaxt } from "../context/GlobalState";

const Balance = () => {
  const { transaction } = useContext(GlobalContaxt);
  const amount = transaction.transaction.map(
    (transitions) => transitions.Amount
  );
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className='flexcol'
      style={{
        width: "90%",
        height: "120px",
        margin: " 15px auto",
        // paddingLeft:'15px',
        backgroundColor: "rgb(68, 203, 156)",
        // display: "flex",
        // flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
        color: "#fff",
      }}
    >
      <h4 style={{ lineHeight: "30px", fontSize: "28px", marginLeft:'15px' }}>
        Your Balance
      </h4>
      <h1 id="balance" style={{marginLeft:'15px'}}>${total}</h1>
    </div>
  );
};
export default Balance;
