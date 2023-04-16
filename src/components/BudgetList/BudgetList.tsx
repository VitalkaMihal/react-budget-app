import React from "react";
import { Budget } from "../Budget/Budget";
import { Remaining } from "../Remaining/Remaining";
import { SpentSoFar } from "../SpentSoFar/SpentSoFar";
import { SelectCurrency } from "../Select/Select";
import { Header } from "./styles";

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
