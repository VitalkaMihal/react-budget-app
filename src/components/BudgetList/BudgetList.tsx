import React from "react";
import { Header } from "./styles";
import { Budget, Remaining, SelectCurrency, SpentSoFar } from "components";

export const BudgetList = () => {
  return (
    <div>
      <Header>
        <h2>Budget</h2>
        <SelectCurrency />
      </Header>
      <Budget />
      <Remaining />
      <SpentSoFar />
    </div>
  );
};
