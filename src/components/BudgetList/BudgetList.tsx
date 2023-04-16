import React from "react";
import { Budget } from "../Budget/Budget";
import { Remaining } from "../Remaining/Remaining";
import { SpentSoFar } from "../SpentSoFar/SpentSoFar";
import { SelectCurrency } from "../Select/Select";

export const BudgetList = () => {
  return (
    <div>
      <div>
        <h2>Budget</h2>
        <SelectCurrency />
      </div>
      <Budget />
      <Remaining />
      <SpentSoFar />
    </div>
  );
};
