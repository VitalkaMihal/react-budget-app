import React, { FunctionComponent, ReactNode } from "react";

import { BudgetContextProvider, CurrencyContextProvider, ExpenseContextProvider } from "context";

interface ChildrenProps {
  children: ReactNode;
}

const combineComponents = (components: FunctionComponent<ChildrenProps>[]) => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) =>
      ({ children }: ChildrenProps) =>
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
