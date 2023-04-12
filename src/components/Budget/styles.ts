import styled from "styled-components";

const StyledBudget = styled.div`
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

const Save = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SaveInput = styled.input`
  background: #7cc6fe;
  border: none;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.6);
  :focus,
  :hover,
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    outline: none;
    appearance: none;
  }
`;

export { StyledBudget, Edit, Save, SaveInput };
