import React from "react";

function TransactionList({ transactions }) {
  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.date} - {transaction.time} - {transaction.product_name} - ₹{transaction.total_amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
