import React from "react";
import { StyledBadge } from "./styles";
import { UseCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

interface BadgeProps {
  cost: string;
}

export const Badge = ({ cost }: BadgeProps) => {
  const { currencyValue } = UseCurrencyContext();

  return (
    <StyledBadge>
      {currencyValue}
      {cost}
    </StyledBadge>
  );
};
