import { ReactNode, createContext, useContext, useState } from "react";

export interface ExpenseContextProviderProps {
  children: ReactNode;
}

interface ExpensesContextState {
  expenses: any[];
}

const ExpenseContext = createContext<ExpensesContextState>({} as ExpensesContextState);

const useExpensesContextValue = () => {
  const [expensesValue, setExpensesContextValue] = useState<ExpensesContextState>(() => {
    return {
      expenses: [1, 2, 3],
    };
  });

  return expensesValue;
};

export const UseExpenseContext = () => useContext(ExpenseContext);

export const ExpenseContextProvider = ({ children }: ExpenseContextProviderProps) => {
  return (
    <ExpenseContext.Provider value={useExpensesContextValue()}>{children}</ExpenseContext.Provider>
  );
};
