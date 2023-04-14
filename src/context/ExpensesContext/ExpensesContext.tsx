import { ReactNode, createContext, useContext, useState } from "react";

export interface ExpenseContextProviderProps {
  children: ReactNode;
}

export interface Expense {
  expense: string;
  cost: string;
  id: string;
}
interface ExpensesContextState {
  expenses: Expense[];
  deleteExpense: (id: string) => void;
  addExpense: (expense: Expense) => void;
}

const ExpenseContext = createContext<ExpensesContextState>({} as ExpensesContextState);

export const useExpensesContextValue = () => {
  const [expensesValue, setExpensesContextValue] = useState<ExpensesContextState>(() => {
    return {
      expenses: [],
      deleteExpense: (id) => {
        setExpensesContextValue((context) => ({
          ...context,
          expenses: context.expenses.filter((expense) => expense.id !== id),
        }));
      },
      addExpense: (expense) => {
        setExpensesContextValue((context) => ({
          ...context,
          expenses: [...context.expenses, expense],
        }));
      },
    };
  });

  return expensesValue;
};

export const UseExpensesContext = () => useContext(ExpenseContext);

export const ExpenseContextProvider = ({ children }: ExpenseContextProviderProps) => {
  return (
    <ExpenseContext.Provider value={useExpensesContextValue()}>{children}</ExpenseContext.Provider>
  );
};
