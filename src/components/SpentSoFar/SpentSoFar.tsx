import React, { useEffect, useState } from "react";
import { Spent } from "./styles";
import { UseExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { UseCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

export const SpentSoFar = () => {
  const [spent, setSpent] = useState(0);
  const { expenses } = UseExpensesContext();
  const { currencyValue } = UseCurrencyContext();

  useEffect(() => {
    setSpent(expenses.reduce((spent, expense) => spent + Number(expense.cost), 0));
  }, [expenses]);
  return (
    <Spent>
      SpentSoFar: {currencyValue}
      {spent}
    </Spent>
  );
};
