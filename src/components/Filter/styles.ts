import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding:10px 0;
  height: 50px;
`;

export const Input = styled.input`
  padding: 5px;  
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 100%;
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
  height: 100%;

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


