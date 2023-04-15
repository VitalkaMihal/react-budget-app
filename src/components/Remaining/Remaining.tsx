import React, { useEffect, useState } from "react";
import { Overspending, StyledRemaining } from "./styles";
import { UseExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";

export const Remaining = () => {
  const { expenses } = UseExpensesContext();
  const { budget } = useBudgetContext();
  const [remaining, setRemaining] = useState(0);
  const [positiveSaldo, setPositiveSaldo] = useState(true);

  useEffect(() => {
    if (remaining >= 0) {
      setPositiveSaldo(true);
    }
    if (remaining < 0) {
      setPositiveSaldo(false);
    }
  }, [remaining]);

  useEffect(() => {
    setRemaining(budget - expenses.reduce((spent, expense) => spent + Number(expense.cost), 0));
  }, [expenses, budget]);

  return (
    <>
      {positiveSaldo && <StyledRemaining>Remaining: {remaining}</StyledRemaining>}
      {positiveSaldo || <Overspending>Overspending by $100 {remaining * -1}</Overspending>}
    </>
  );
};
