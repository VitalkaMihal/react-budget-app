import React from "react";
import { Budget } from "../Budget/Budget";
import { Remaining } from "../Remaining/Remaining";
import { SpentSoFar } from "../SpentSoFar/SpentSoFar";
import { EnterBudget } from "../EnterBudget/EnterBudget";

export const BudgetList = () => {
  return (
    <div>
      <h2>Budget</h2>
      <Budget />
      <EnterBudget />
      <Remaining />
      <SpentSoFar />
    </div>
  );
};
