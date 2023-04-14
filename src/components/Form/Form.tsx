import React from "react";

import { useForm } from "react-hook-form";
import { UseExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import uuid from "react-uuid";
import { Button, Input, StyledForm } from "./styles";

interface ExpenseOnSubmitProps {
  expense: string;
  cost: string;
}

export const Form = () => {
  const { addExpense } = UseExpensesContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ExpenseOnSubmitProps>();
  const onSubmit = (expense: ExpenseOnSubmitProps) => {
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
      {errors.expense?.type === "maxLength" && (
        <p role="alert" style={{ color: "red" }}>
          expense is long
        </p>
      )}
      {errors.expense?.type === "required" && (
        <p role="alert" style={{ color: "red" }}>
          enter expense
        </p>
      )}
      {errors.expense?.type === "pattern" && (
        <p role="alert" style={{ color: "red" }}>
          only letters
        </p>
      )}

      <Input
        {...register("cost", { required: true, maxLength: 5, min: 1, pattern: /^[0-9]+$/i })}
        aria-invalid={errors.cost ? "true" : "false"}
      />
      {errors.cost?.type === "maxLength" && (
        <p role="alert" style={{ color: "red" }}>
          cost is long
        </p>
      )}
      {errors.cost?.type === "required" && (
        <p role="alert" style={{ color: "red" }}>
          enter cost
        </p>
      )}
      {errors.cost?.type === "pattern" && (
        <p role="alert" style={{ color: "red" }}>
          only numbers
        </p>
      )}
      {errors.cost?.type === "min" && (
        <p role="alert" style={{ color: "red" }}>
          above zero
        </p>
      )}

      <Button type="submit">Done</Button>
    </StyledForm>
  );
};
