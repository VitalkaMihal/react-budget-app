import React from "react";
import { UseExpensesContext } from "../../context/Expenses/Expenses";

export const ExpensesList = () => {
  const { expenses, deleteExpense } = UseExpensesContext();
  return (
    <div>
      {expenses.map((expense) => (
        <li key={expense.id}>
          <p>id:{expense.id}</p>
          <p>name:{expense.name}</p>
          <button onClick={() => deleteExpense(expense.id)}>x</button>
        </li>
      ))}
    </div>
  );
};
