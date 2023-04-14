import React from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { StyledBudget, Edit, Save, SaveInput } from "./styles";
import { useToggle } from "../../hooks/useToggle";
import { useForm } from "react-hook-form";

export const Budget = () => {
  const { budget, saveBudget } = useBudgetContext();
  const [isTextChanged, setIsTextChanged] = useToggle(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = ({ budget }: any) => {
    saveBudget(budget);
    reset();
    setIsTextChanged();
  };

  return (
    <StyledBudget>
      {isTextChanged || (
        <>
          <p>Budget: {budget}</p>
          <Edit onClick={setIsTextChanged}>edit</Edit>
        </>
      )}
      {isTextChanged && (
        <Save onSubmit={handleSubmit(onSubmit)}>
          <SaveInput placeholder="Enter Budget..." type="number" {...register("budget")} />
          <Edit type="submit">save</Edit>
        </Save>
      )}
    </StyledBudget>
  );
};
