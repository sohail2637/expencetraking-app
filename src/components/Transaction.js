import React, { useContext } from "react";
import { GlobalContaxt } from "../context/GlobalState";
import "../App.css";
import transitions from "@material-ui/core/styles/transitions";

const Transaction = () => {
  const { transaction, deletTrenasaction } = useContext(GlobalContaxt);

 

  return (
    <div
      className="flexcol"
      style={{ width: "90%", margin: " 20px auto", alignItems: "flex-start" }}
    >
      <h3
        style={{
          marginLeft: "15px",
          textShadow: "0px 3px #fff",
          marginTop: "10px",
        }}
      >
        History
      </h3>
      <ul style={{ width: "100%", paddingLeft: "0px" }}>
        {transaction.transaction.map((transac) => {
          const sign = transac.Amount < 0 ? "-" : "+";
          return (
            <li
              className={transac.Amount < 0 ? "mins flexbox" : "plus flexbox"}
              style={{
                width: "90%",
                justifyContent: "space-between",
                margin: "15px auto",
                lineHeight: "30px",
                backgroundColor: "#fff",
                padding: "0px 15px",
                boxShadow: "0px 3px rgb(57, 190, 100)",
              }}
            >
              {transac.Text}
              <span>
                {sign}${Math.abs(transac.Amount)}
              </span>
              <button
                className="btn"
                onClick={() => deletTrenasaction(transac.id)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Transaction;
