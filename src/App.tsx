import React from "react";
import { BudgetList, ExpensesList, Form } from "components";
import { StyledContainer } from "styles";

const App = () => {
  return (
    <StyledContainer>
      <BudgetList />
      <ExpensesList />
      <Form />
    </StyledContainer>
  );
};

export default App;
