import React from "react";
import { Expense, UseExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { ExpensesItem } from "../ExpensesItem/ExpensesItem";

export const ExpensesList = () => {
  const { expenses } = UseExpensesContext();
  return (
    <div>
      <h2>Expenses</h2>
      {expenses.map((expense: Expense) => {
        return <ExpensesItem key={expense.id} expense={expense} />;
      })}
    </div>
  );
};
