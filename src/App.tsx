import React from "react";
import { ExpensesList } from "./components/ExpensesList/ExpensesList";
import { Form } from "./components/Form/Form";
import { BudgetList } from "./components/BudgetList/BudgetList";

const App = () => {
  return (
    <div className="App">
      <BudgetList />
      <ExpensesList />
      <Form />
    </div>
  );
};

export default App;
