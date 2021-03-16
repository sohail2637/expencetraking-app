import transitions from "@material-ui/core/styles/transitions";
import React, { useContext } from "react";
import "../App.css";
import { GlobalContaxt } from "../context/GlobalState";

 const Incomexpences = () => {
  const { transaction } = useContext(GlobalContaxt);
  const amount = transaction.transaction.map((trans) => trans.Amount);
  // const total = amount.reduce((acc, item) => (acc += item),0).toFixed(2);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div
      className=" flexbox"
      style={{
        width: "90%",
        height: "100px",
        margin: "auto",
        justifyContent: "space-evenly",
        backgroundColor: "#fff",
        color: "rgb(57, 190, 100)",
      }}
    >
      <div className="flexcol">
        <h3>INCOME</h3>
        <h3>{income}</h3>
      </div>
      <div className="flexcol" style={{ color: "rgb(200, 90, 36)" }}>
        <h3>EXPENCES</h3>
        <h3>{expense}</h3>
      </div>
    </div>
  );
};
export default Incomexpences;
