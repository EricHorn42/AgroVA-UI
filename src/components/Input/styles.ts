import styled from "styled-components";

export const Input = styled.input`
  outline: none;
  padding: 16px 20px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;

  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background.primary};
  border: none;
`;
