import React from "react";

import { useForm } from "react-hook-form";
import { UseExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import uuid from "react-uuid";
import { Button, Input, StyledForm } from "./styles";

export const Form = () => {
  const { addExpense } = UseExpensesContext();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (expense: any) => {
    addExpense({ ...expense, id: uuid() });
    reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h2>Add Expense</h2>
      <Input type="text" {...register("expense")} />
      <Input type="number" {...register("cost")} />
      <Button type="submit">Done</Button>
    </StyledForm>
  );
};
