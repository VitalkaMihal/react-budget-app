import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ExpenseContextProvider } from "./context/ExpensesContext/ExpensesContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ExpenseContextProvider>
    <App />
  </ExpenseContextProvider>,
);
