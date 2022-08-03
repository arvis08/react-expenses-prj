import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: "e1", title: "item1", amount: 100, date: new Date(2022, 5, 22) },
  { id: "e2", title: "item2", amount: 200, date: new Date(2021, 6, 22) },
  { id: "e3", title: "item3", amount: 300, date: new Date(2021, 7, 22) },
  { id: "e4", title: "item4", amount: 400, date: new Date(2019, 8, 22) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
