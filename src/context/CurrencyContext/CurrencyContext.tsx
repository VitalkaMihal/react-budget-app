import { ReactNode, createContext, useContext, useState } from "react";
import { SingleValue } from "react-select";

enum Currency {
  USD = "$",
  EUR = "€",
  GBR = "£",
}

export interface OptionProps {
  readonly value: string;
  readonly label: string;
}

export const options: OptionProps[] = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBR, label: "GBR" },
];

interface CurrencyContextState {
  options: OptionProps[];
  option: OptionProps;
  handleCurrencySelect: (event: SingleValue<OptionProps>) => void;
  currencyValue: string;
}

interface CurrencyContextProviderProps {
  children: ReactNode;
}

const CurrencyContext = createContext<CurrencyContextState>({} as CurrencyContextState);

const useCurrencyContextValue = () => {
  const [currency, setCurrency] = useState<CurrencyContextState>(() => {
    return {
      options: options,
      option: options[0],
      currencyValue: options[0].value,
      handleCurrencySelect: (event: SingleValue<OptionProps>) => {
        if (event) {
          setCurrency((context) => ({ ...context, option: event, currencyValue: event.value }));
        }
      },
    };
  });
  return currency;
};

export const UseCurrencyContext = () => useContext(CurrencyContext);

export const CurrencyContextProvider = ({ children }: CurrencyContextProviderProps) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
