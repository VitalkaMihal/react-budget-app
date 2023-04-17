import React from "react";
import { Badge } from "components";
import { Expense, UseExpensesContext } from "context";
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
