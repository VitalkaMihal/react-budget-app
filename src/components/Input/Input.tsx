import React from "react";
import { StyledSearch } from "./styles";

export const Search = ({ expensesCallBack }: any) => {
  return <StyledSearch onChange={expensesCallBack}></StyledSearch>;
};
