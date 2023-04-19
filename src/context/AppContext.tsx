import React, { ReactNode } from "react";

import { BudgetContextProvider, CurrencyContextProvider, ExpenseContextProvider } from "context";

const combineComponents = (components: any[]) => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) =>
      ({ children }: { children: ReactNode }) =>
        (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        ),
  );
};

export const AppContextProvider = combineComponents([
  BudgetContextProvider,
  CurrencyContextProvider,
  ExpenseContextProvider,
]);
