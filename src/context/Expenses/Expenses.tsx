import { ReactNode, createContext, useState } from "react";

interface Prop {
  children: ReactNode;
}

interface ExpensesContextState {
  expenses: any[];
}

const ExpenseContext = createContext<ExpensesContextState>({} as ExpensesContextState);

const useExpensesContextValue = () => {
  const [expensesValue, setExpensesContextValue] = useState<ExpensesContextState>(() => {
    return {
      expenses: [],
    };
  });

  return expensesValue;
};

export const ExpenseContextProvider = ({ children }: Prop) => {
  return (
    <ExpenseContext.Provider value={useExpensesContextValue()}>{children}</ExpenseContext.Provider>
  );
};
