import React, { ReactNode } from "react";
import { Expense, UseExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Badge } from "../Badge/Badge";
import { BudgeButton, Expenses } from "./styles";

interface ExpensesItemProps {
  expense: Expense;
}

export const ExpensesItem = ({ expense }: ExpensesItemProps) => {
  const { deleteExpense } = UseExpensesContext();

  return (
    <Expenses>
      <div>{expense.expense}</div>
      <BudgeButton>
        <Badge cost={expense.cost} />
        <button onClick={() => deleteExpense(expense.id)}>x</button>
      </BudgeButton>
    </Expenses>
  );
};
