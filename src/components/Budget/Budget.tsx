import React from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { StyledBudget, Edit, Save, SaveInput } from "./styles";
import { useToggle } from "../../hooks/useToggle";
import { useForm } from "react-hook-form";
import { UseCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

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
