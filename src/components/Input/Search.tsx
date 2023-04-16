import React from "react";
import { StyledSearch } from "./styles";

interface SearchProps {
  expensesCallBack: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ expensesCallBack }: SearchProps) => {
  return <StyledSearch onChange={expensesCallBack}></StyledSearch>;
};
