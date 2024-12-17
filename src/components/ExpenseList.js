import React from "react";

const ExpenseList = ({ expenses, onRemoveExpense, onUpdateExpense }) => {
  const handleDelete = (id) => {
    onRemoveExpense(id);
  };

  const handleEdit = (expense) => {
    const newDescription = prompt(
      "Enter new description:",
      expense.description
    );
    const newAmount = prompt("Enter new amount:", expense.amount);
    const newCategory = prompt("Enter new category:", expense.category);

    const updatedExpense = {
      ...expense,
      description: newDescription || expense.description,
      amount: newAmount ? parseFloat(newAmount) : expense.amount,
      category: newCategory || expense.category,
    };

    onUpdateExpense(updatedExpense);
  };

  return (
    <div className="expense-container">
      <h2>Expense List</h2>
      <ul className="expense-list">
        {expenses.map((expense) => (
          <li key={expense.id} className="expense-item">
            <span>
              {expense.description} - ${expense.amount} - {expense.category}
            </span>
            <button className="edit-btn" onClick={() => handleEdit(expense)}>
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => handleDelete(expense.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
