import React, { useState, useEffect } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import "./App.css"; // Import the stylesheet

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [theme, setTheme] = useState("light");

  // Load the saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save to localStorage
  };

  // Add expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  // Remove expense
  const removeExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Update expense
  const updateExpense = (updatedExpense) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
  };

  return (
    <div className={`app-container ${theme}`}>
      <header>
        <h1>Expense Tracker</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>
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
