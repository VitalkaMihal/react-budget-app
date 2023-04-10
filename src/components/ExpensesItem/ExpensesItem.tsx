import React, { ReactNode } from "react";
import { Expense, UseExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Badge } from "../Badge/Badge";

interface ExpensesItemProps {
  expense: Expense;
}

export const ExpensesItem = ({ expense }: ExpensesItemProps) => {
  const { deleteExpense } = UseExpensesContext();

  return (
    <li key={expense.id}>
      <p>expense:{expense.expense}</p>
      <Badge cost={expense.cost} />
      <button onClick={() => deleteExpense(expense.id)}>x</button>
    </li>
  );
};
