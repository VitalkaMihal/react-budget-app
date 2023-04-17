import React, { useEffect, useState } from "react";
import { Overspending, StyledRemaining } from "./styles";
import { UseCurrencyContext, UseExpensesContext, useBudgetContext } from "context";

export const Remaining = () => {
  const { expenses } = UseExpensesContext();
  const { budget } = useBudgetContext();
  const [remaining, setRemaining] = useState(0);
  const [positiveSaldo, setPositiveSaldo] = useState(true);

  const { currencyValue } = UseCurrencyContext();

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
      {positiveSaldo && (
        <StyledRemaining>
          Remaining: {currencyValue}
          {remaining}
        </StyledRemaining>
      )}
      {positiveSaldo || (
        <Overspending>
          Overspending by {currencyValue}
          {remaining * -1}
        </Overspending>
      )}
    </>
  );
};
