import React from "react";
import { Expense, UseExpensesContext } from "../../context/Expenses/Expenses";
import { ExpensesItem } from "../ExpensesItem/ExpensesItem";

export const ExpensesList = () => {
  const { expenses } = UseExpensesContext();
  return (
    <ul>
      <h2>Expenses</h2>
      {expenses.map((expense: Expense) => {
        return <ExpensesItem expense={expense} />;
      })}
    </ul>
  );
};
