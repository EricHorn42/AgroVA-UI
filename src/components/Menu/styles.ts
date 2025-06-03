import { Link as ReactLink } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div<{ $sidebar: boolean }>`
  grid-area: menu;
  background-color: ${ props => props.theme.colors.background.primary};
  width: ${({ $sidebar, theme }) => ($sidebar ? theme.layout.width.menuOpen : theme.layout.width.menuClose)}px;  
  overflow: hidden;  
  transition: width 0.5s ease;
  z-index: 1000;
`;

export const Link = styled(ReactLink)`
    text-decoration: none;
`;

export const ContentLogout = styled.div`
    bottom: 0;
    right: 0;

    > Button {
        width: 100%;
    }
`;

export const LogoWrapper = styled.div`
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    position: absolute;
    height: 80px;
    left: 0px;
    transition: opacity 0.3s ease; 
  }

  .hidden {
    opacity: 0;
  }

  .visible {
    opacity: 1;
  }
`;
