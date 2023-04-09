import React from "react";
import { ExpensesList } from "./components/ExpensesList/ExpensesList";
import { Form } from "./components/Form/Form";

const App = () => {
  return (
    <div className="App">
      <ExpensesList />
      <Form />
    </div>
  );
};

export default App;
