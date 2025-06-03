import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* padding: 10px; */
  /* background-color: #f5f5f5; */
  /* border-radius: 5px; */
  /* margin-bottom: 10px; */
`;

export const Input = styled.input`
  padding: 5px;  
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 200px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.button.primary};
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: ${props => props.theme.colors.button.hover};
  }
`;
export const ButtonClear = styled(Button)`
  background-color: ${props => props.theme.colors.button.disable};
  /* margin-left: 10px; */

  &:hover {
    background-color: ${props => props.theme.colors.button.disable};
  }
`;
export const ButtonSubmit = styled(Button)`
  background-color: ${props => props.theme.colors.button.submit};
  /* margin-left: 10px; */
`;


