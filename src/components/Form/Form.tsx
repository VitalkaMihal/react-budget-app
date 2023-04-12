import React from "react";

import { useForm } from "react-hook-form";
import { UseExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import uuid from "react-uuid";
import { Button, Input, StyledForm } from "./styles";

export const Form = () => {
  const { addExpense } = UseExpensesContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (expense: any) => {
    addExpense({ ...expense, id: uuid() });
    reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h2>Add Expense</h2>
      <Input
        {...register("expense", {
          required: true,
          maxLength: 15,
          pattern: /^[A-Za-z | А-Яа-я]+$/i,
        })}
        aria-invalid={errors.expense ? "true" : "false"}
      />
      {errors.expense?.type === "maxLength" && <p role="alert">name is long</p>}
      {errors.expense?.type === "required" && <p role="alert">name is required</p>}
      {errors.expense?.type === "pattern" && <p role="alert">only letters</p>}

      <Input
        {...register("cost", { required: true, maxLength: 5, min: 1, pattern: /^[0-9]+$/i })}
        aria-invalid={errors.cost ? "true" : "false"}
      />
      {errors.cost?.type === "maxLength" && <p role="alert">name is long</p>}
      {errors.cost?.type === "required" && <p role="alert">name is required</p>}
      {errors.cost?.type === "pattern" && <p role="alert">only numbers</p>}
      {errors.cost?.type === "min" && <p role="alert">above zero</p>}

      <Button type="submit">Done</Button>
    </StyledForm>
  );
};
