import React from "react";
import Select from "react-select";
import { UseCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

export const SelectCurrency = () => {
  const { options, option, handleCurrencySelect } = UseCurrencyContext();
  return <Select options={options} defaultValue={option} onChange={handleCurrencySelect} />;
};
