import { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";
// inital state

const initalState = {
  transaction: [
    // { id: 3, Amount: 50, Text: "Book" },
    // { id: 1, Amount: -20, Text: "folwer" },
    // { id: 4, Amount: 100, Text: "Amount" },
    // { id: 2, Amount: -30, Text: "Salary" },
  ],
};
// cerate contaxt
export const GlobalContaxt = createContext(initalState);
// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);
  // action
  const deletTrenasaction = (id) => {
    dispatch({
      type: "DELETE-TRANSACTION",
      payload: id,
    });
  };
  const addTrenasaction = (transaction) => {
    dispatch({
      type: "ADD-TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContaxt.Provider
      value={{
        transaction: state,
        deletTrenasaction,
        addTrenasaction,
      }}
    >
      {children}
    </GlobalContaxt.Provider>
  );
};
