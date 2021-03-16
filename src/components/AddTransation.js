import React, { useState, useContext } from "react";
import "../App.css";
import { GlobalContaxt } from "../context/GlobalState";

export const AddTransation = () => {
  const { addTrenasaction } = useContext(GlobalContaxt);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const onsubmit = (e) => {
    e.preventDefault();
    console.log(text, amount);
    const newtransaction = {
      id: Math.floor(Math.random() * 100000),
      Text:text,
      Amount: +amount,
    };
    addTrenasaction(newtransaction);
  };
  return (
    <div
      className="flexcol"
      style={{ width: "90%", margin: "auto", alignItems: "flex-start" }}
    >
      <h3
        style={{
          marginLeft: "15px",
          textShadow: "0px 3px #fff",
          marginTop: "10px",
        }}
      >
        Add new Transaction
      </h3>
      <form style={{ width: "100%" }} onSubmit={onsubmit}>
        <div className="flexcol" style={{ alignItems: "flex-start" }}>
          <label
            htmlFor="text"
            style={{ marginLeft: "15px", marginTop: "20px", fontSize: "18px" }}
          >
            Text
          </label>
          <input
            type="text"
            value={text}
            placeholder="Enter Text..."
            style={{
              width: "90%",
              justifyContent: "space-between",
              margin: "10px auto",
              lineHeight: "30px",
              backgroundColor: "#fff",
              fontSize: "16px",
            }}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
        <div className="flexcol" style={{ alignItems: "flex-start" }}>
          <label
            htmlFor="text"
            style={{
              marginLeft: "15px",
              marginTop: "20px",
              fontSize: "16px",
              textAlign: "left",
            }}
          >
            Amount
            <br />
            (negtive-expence, positive-income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{
              width: "90%",
              justifyContent: "space-between",
              margin: "10px auto",
              lineHeight: "30px",
              backgroundColor: "#fff",
              border: "2px grove #ddd",
              fontSize: "16px",
            }}
          ></input>
        </div>
        <button
          className="btn"
          type="submit"
          style={{
            width: "93%",
            justifyContent: "space-between",
            margin: "15px auto",
            lineHeight: "40px",
            color: "#fff",
            fontSize: "20px",
          }}
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};
export default AddTransation;
