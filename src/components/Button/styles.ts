import styled from "styled-components";

export const Button = styled.button`
  /* padding: 8px 10px; */
  min-width: 100px;
  min-height: 30px;
  outline: none;
  border: none;
  border-radius: 5px;
  /* width: 100%; */
  cursor: pointer;
  background-color: ${props => props.theme.colors.button.primary};
  color: white;
  font-weight: 600;
  font-size: 12px;
  max-width: 350px;

  &:hover {
    background-color: ${props => props.theme.colors.button.hover};
  }
  &:active {
    background-color: ${props => props.theme.colors.button.active};
  }
  &:disabled {
    background-color: ${props => props.theme.colors.button.disable};
    cursor: not-allowed;
  }
  &:focus {
    box-shadow: 0 0 0 2px rgba(4, 110, 229, 0.5);
    outline: none;
  }
  &:disabled:focus {
    box-shadow: none;
    outline: none;
  }
  &:disabled:hover {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
