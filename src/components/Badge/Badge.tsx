import React from "react";

interface BadgeProps {
  cost: string;
}

export const Badge = ({ cost }: BadgeProps) => {
  return <div>{cost}</div>;
};
