import React from "react";

import { useForm } from "react-hook-form";
import { UseExpensesContext } from "../../context/Expenses/Expenses";
import uuid from "react-uuid";

export const Form = () => {
  const { addExpense } = UseExpensesContext();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (d: any) => {
    addExpense({ ...d, id: uuid() });
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("expense")} />
      <input type="number" {...register("cost")} />
      <button type="submit" />
    </form>
  );
};
