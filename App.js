import React, { useState, useEffect } from "react";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  const addTransaction = (transaction) => {
    fetch("http://127.0.0.1:5000/add_transaction", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction),
    })
      .then((response) => response.json())
      .then(() => {
        setTransactions([...transactions, transaction]);
      });
  };

  return (
    <div className="App">
      <h1>Transaction Tracker</h1>
      <AddTransaction onAdd={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;





