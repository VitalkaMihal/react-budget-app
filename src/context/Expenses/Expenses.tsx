import { ReactNode, createContext, useContext, useState } from "react";

export interface ExpenseContextProviderProps {
  children: ReactNode;
}

interface ExpensesContextState {
  expenses: any[];
  deleteExpense: (id: number) => void;
}

interface Expense {
  id: number;
  name: string;
}

const ExpenseContext = createContext<ExpensesContextState>({} as ExpensesContextState);

export const useExpensesContextValue = () => {
  const [expensesValue, setExpensesContextValue] = useState<ExpensesContextState>(() => {
    return {
      expenses: [
        {
          id: 1,
          name: "lopata",
        },
        {
          id: 2,
          name: "sobaca",
        },
      ],
      deleteExpense: (id: number) => {
        setExpensesContextValue((context) => ({
          ...context,
          expenses: context.expenses.filter((expense) => expense.id !== id),
        }));
      },
      addExpense: (expense: Expense) => {
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
