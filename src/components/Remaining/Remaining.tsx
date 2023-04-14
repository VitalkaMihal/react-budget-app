import React, { useEffect, useState } from "react";
import { StyledRemaining } from "./styles";
import { UseExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";

export const Remaining = () => {
  const { expenses } = UseExpensesContext();
  const { budget } = useBudgetContext();
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    setRemaining(budget - expenses.reduce((spent, expense) => spent + Number(expense.cost), 0));
  }, [expenses, budget]);

  return <StyledRemaining>Remaining: {remaining}</StyledRemaining>;
};
