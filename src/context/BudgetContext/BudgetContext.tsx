import { ReactNode, createContext, useContext, useState } from "react";

interface BudgetContextState {
  budget: string;
  saveBudget: (budget: any) => any;
}

interface budgetContextProviderProps {
  children: ReactNode;
}

const BudgetContext = createContext<BudgetContextState>({} as BudgetContextState);

export const useBudgetContextValue = () => {
  const [budgetValue, setBudgetContextValue] = useState<BudgetContextState>(() => {
    return {
      budget: "1000",
      saveBudget: (budget: string) => {
        setBudgetContextValue((context) => ({ ...context, budget: budget }));
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
