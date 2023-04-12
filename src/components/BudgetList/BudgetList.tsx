import React from "react";
import { Budget } from "../Budget/Budget";
import { Remaining } from "../Remaining/Remaining";
import { SpentSoFar } from "../SpentSoFar/SpentSoFar";

export const BudgetList = () => {
  return (
    <div>
      <h2>Budget</h2>
      <Budget />
      <Remaining />
      <SpentSoFar />
    </div>
  );
};
