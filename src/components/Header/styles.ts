import styled from "styled-components";


export const Container = styled.div<{ $showHeader: boolean }>`
    grid-area: header;
    display: flex;
    gap: 30px;
    padding: 10px 20px;
    align-items: center;
    height: ${({ $showHeader, theme }) => $showHeader ? theme.layout.height.header : 20}px;
    background-color: ${props => props.theme.colors.background.secondary};
    /* background-color: ${({$showHeader, theme}) => $showHeader ? theme.colors.background.secondary : 'transparent'};     */
    /* overflow: hidden; */
`;

export const Title = styled.h1`
    font-size: 24px;    
`;

export const TogleButton = styled.button<{ $showHeader: boolean }>`
    position: absolute;
    top: ${({ $showHeader, theme }) => $showHeader ? theme.layout.height.header - 20 : 0}px;
    background-color: transparent;
    height: 20px;
    width: 20px;
    right: 0px;
    border: none;
    cursor: pointer;
    z-index: 1000;
`;