import { ReactNode, createContext, useContext, useState } from "react";

export interface BudgetContextState {
  budget: number;
  saveBudget: (budget: string) => void;
}

interface budgetContextProviderProps {
  children: ReactNode;
}

const BudgetContext = createContext<BudgetContextState>({} as BudgetContextState);

export const useBudgetContextValue = () => {
  const [budgetValue, setBudgetContextValue] = useState<BudgetContextState>(() => {
    return {
      budget: 0,
      saveBudget: (budget) => {
        setBudgetContextValue((context) => ({ ...context, budget: Number(budget) }));
      },
    };
  });
  return budgetValue;
};

export const useBudgetContext = () => useContext(BudgetContext);

export const BudgetContextProvider = ({ children }: budgetContextProviderProps) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>{children}</BudgetContext.Provider>
  );
};
