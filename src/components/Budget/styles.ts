import styled from "styled-components";

const StyledBudget = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100px;
  background: #7cc6fe;
  border-radius: 10px;
  font-size: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Edit = styled.button`
  font-size: 20px;
  padding: 10px 30px;
  background: #ffffff;
  border-radius: 10px;
  border: none;
`;

export { StyledBudget, Edit };
