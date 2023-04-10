import React from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { StyledBudget, Edit } from "./styles";

export const Budget = () => {
  const { budget } = useBudgetContext();

  return (
    <StyledBudget>
      <p>Budget: {budget}</p>
      <Edit>edit</Edit>
    </StyledBudget>
  );
};
