import React from "react";
import { GlobalStyles } from "./UI/GlobalStyles";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BudgetContextProvider, CurrencyContextProvider, ExpenseContextProvider } from "context";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <CurrencyContextProvider>
    <BudgetContextProvider>
      <ExpenseContextProvider>
        <GlobalStyles />
        <App />
      </ExpenseContextProvider>
    </BudgetContextProvider>
  </CurrencyContextProvider>,
);
