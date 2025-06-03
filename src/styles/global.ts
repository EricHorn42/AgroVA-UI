import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    display: grid;
    grid-template-areas:
    "menu header"
    "menu content";
    grid-template-columns: ${(props) => props.theme.layout.width.menuClose}px auto;
    gap: 0px;
    grid-column: 3fr;
    height: 100vh;    
  }

  body {
    background-color: ${(props) => props.theme.colors.background.primary};
    color: ${(props) => props.theme.colors.text};
    border-color: ${(props) => props.theme.colors.border};
    font-family: Arial, Helvetica, sans-serif;
  }  
`;

export const Container = styled.div`
  grid-area: content;
`;

export default GlobalStyle;
