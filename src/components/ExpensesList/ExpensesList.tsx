import React, { useContext } from "react";
import { UseExpenseContext } from "../../context/Expenses/Expenses";

export const ExpensesList = () => {
  const { expenses } = UseExpenseContext();

  return (
    <div>
      {expenses.map((expense) => (
        <li key={expense}>{expense}</li>
      ))}
    </div>
  );
};
