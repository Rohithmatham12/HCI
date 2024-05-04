import React, { useState, useEffect } from 'react';

function TransactionUI() {
  const [transactions, setTransactions] = useState([]); // State to hold transaction data

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const response = await fetch('https://testnet-idx.algonode.cloud/v2/accounts/7GBY26USQUWHBE74EBKYNLHZ752PHNVFAE72E24ALMJOHPKBDDVNHRE2CE/transactions');
        const data = await response.json();
        setTransactions(data.transactions); // Assuming 'transactions' is the key where transaction data is stored
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    }

    fetchTransactions();
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Confirmed Round</th>
            <th>Receiver ID</th>
            <th>Sender ID</th>
          </tr>
        </thead>
        <tbody>
          {transactions.filter(transaction => transaction['payment-transaction'] && transaction['payment-transaction'].receiver).map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction['confirmed-round']}</td>
              <td>{transaction['payment-transaction'].receiver}</td>
              <td>{transaction['sender']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionUI;
