import { ExpensesItem, Search } from "components";
import { Expense, UseExpensesContext } from "context";
import { useDebounce } from "hooks";
import React, { useEffect, useState } from "react";

export const ExpensesList = () => {
  const { expenses } = UseExpensesContext();
  const [expensesSearch, setExpensesSearch] = useState(expenses);
  useEffect(() => setExpensesSearch(expenses), [expenses]);

  const expensesCallBack = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpensesSearch(expenses.filter((expense) => expense.expense.indexOf(e.target.value) !== -1));
  };

  const searchDebounce = useDebounce(expensesSearch);

  return (
    <div>
      <h2>Expenses</h2>
      <Search expensesCallBack={expensesCallBack} />
      {searchDebounce.map((expense: Expense) => {
        return <ExpensesItem key={expense.id} expense={expense} />;
      })}
    </div>
  );
};
