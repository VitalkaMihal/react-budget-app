import React from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useForm } from "react-hook-form";

export const EnterBudget = () => {
  const { saveBudget } = useBudgetContext();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = ({ budget }: any) => {
    saveBudget(budget);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="number" {...register("budget")} />
      <button type="submit">save</button>
    </form>
  );
};
