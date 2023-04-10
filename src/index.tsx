import React from "react";
import { GlobalStyles } from "./UI/GlobalStyles";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ExpenseContextProvider } from "./context/ExpensesContext/ExpensesContext";
import { BudgetContextProvider } from "./context/BudgetContext/BudgetContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BudgetContextProvider>
    <ExpenseContextProvider>
      <GlobalStyles />
      <App />
    </ExpenseContextProvider>
  </BudgetContextProvider>,
);
