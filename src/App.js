import "./App.css";
import Header from "./components/header";
import Balance from "./components/Balance";
import Incomexpences from "./components/incomexpences";
import Transaction from "./components/Transaction";
import AddTransation from "./components/AddTransation";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <GlobalProvider>
        <div className="main">
          <Header />
          <div className="container">
            <Balance />
            <Incomexpences />
            <Transaction />
            <AddTransation />
          </div>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
