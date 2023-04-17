import React from "react";
import { StyledBudget, Edit, Save, SaveInput } from "./styles";
import { useForm } from "react-hook-form";
import { UseCurrencyContext, useBudgetContext } from "context";
import { useToggle } from "hooks";

interface BudgetOnSubmitProps {
  enterBudget: string;
}

export const Budget = () => {
  const { budget, saveBudget } = useBudgetContext();
  const [isTextChanged, setIsTextChanged] = useToggle(false);
  const { register, handleSubmit, reset } = useForm<BudgetOnSubmitProps>();
  const onSubmit = ({ enterBudget }: BudgetOnSubmitProps) => {
    saveBudget(enterBudget);
    reset();
    setIsTextChanged();
  };

  const { currencyValue } = UseCurrencyContext();

  return (
    <StyledBudget>
      {isTextChanged || (
        <>
          <p>
            Budget: {currencyValue}
            {budget}
          </p>
          <Edit onClick={setIsTextChanged}>edit</Edit>
        </>
      )}
      {isTextChanged && (
        <Save onSubmit={handleSubmit(onSubmit)}>
          <SaveInput placeholder="Enter Budget..." type="number" {...register("enterBudget")} />
          <Edit type="submit">save</Edit>
        </Save>
      )}
    </StyledBudget>
  );
};
