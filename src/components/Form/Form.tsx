import React from "react";

import { useForm } from "react-hook-form";
import { UseExpensesContext } from "../../context/Expenses/Expenses";
import uuid from "react-uuid";

export const Form = () => {
  const { addExpense } = UseExpensesContext();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (expense: any) => {
    addExpense({ ...expense, id: uuid() });
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Add Expense</h2>
      <input type="text" {...register("expense")} />
      <input type="number" {...register("cost")} />
      <button type="submit">Done</button>
    </form>
  );
};
