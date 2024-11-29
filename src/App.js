import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  // Add expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  // Remove expense
  const removeExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Update expense (optional if you want to edit expenses)
  const updateExpense = (updatedExpense) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList
        expenses={expenses}
        onRemoveExpense={removeExpense}
        onUpdateExpense={updateExpense}
      />
    </div>
  );
};

export default App;
