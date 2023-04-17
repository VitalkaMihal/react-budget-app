import { UseCurrencyContext } from "context";
import React from "react";
import Select from "react-select";

export const SelectCurrency = () => {
  const { options, option, handleCurrencySelect } = UseCurrencyContext();
  return <Select options={options} defaultValue={option} onChange={handleCurrencySelect} />;
};
