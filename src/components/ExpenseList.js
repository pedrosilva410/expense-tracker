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
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>
              {expense.description} - ${expense.amount} - {expense.category}
            </span>
            <button onClick={() => handleEdit(expense)}>Edit</button>
            <button onClick={() => handleDelete(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
