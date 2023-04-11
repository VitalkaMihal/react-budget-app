import React from "react";
import { StyledBadge } from "./styles";

interface BadgeProps {
  cost: string;
}

export const Badge = ({ cost }: BadgeProps) => {
  return <StyledBadge>{cost}</StyledBadge>;
};
