import { ReactNode, createContext, useContext, useState } from "react";

const BudgetContext = createContext<string>("");

export const useBudgetContext = () => {
  const [budgetValue, setBudgetContextValue] = useState<string>("1000");

  return budgetValue;
};
