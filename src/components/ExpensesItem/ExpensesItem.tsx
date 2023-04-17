import React from "react";
import { BudgeButton, Expenses } from "./styles";
import { Badge } from "components";
import { Expense, UseExpensesContext } from "context";

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
