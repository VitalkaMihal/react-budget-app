import { UseCurrencyContext } from "context";
import React from "react";
import Select from "react-select";

interface SelectStilesProps {
  [style: string]: () => void;
}

const selectStiles: SelectStilesProps = {
  control: () => ({ display: "flex" }),
  container: () => ({
    width: "80px",
    border: "1px solid black",
    height: "30px",
    marginRight: "0",
    lineHeight: "30px",
    borderRadius: "5px",
  }),
  valueContainer: () => ({}),
  dropdownIndicator: () => ({}),
  indicatorsContainer: () => ({}),
  input: () => ({}),
  menu: () => ({}),
  menuList: () => ({ position: "absolute", background: "white" }),
  menuPortal: () => ({}),
  option: () => ({}),
};

export const SelectCurrency = () => {
  const { options, option, handleCurrencySelect } = UseCurrencyContext();
  return (
    <Select
      options={options}
      defaultValue={option}
      onChange={handleCurrencySelect}
      styles={selectStiles}
    />
  );
};
