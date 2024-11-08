import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions([
      { id: 1, amount: 200, category: 'Ingreso' },
      { id: 2, amount: -100, category: 'Gasto' },
    ]);
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {transactions.map((trans) => (
          <li key={trans.id}>
            {trans.category}: ${trans.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
