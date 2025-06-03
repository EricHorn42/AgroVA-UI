import styled from "styled-components";


export const Container = styled.div`
    grid-area: header;
    background-color: ${props => props.theme.colors.background.primary};
`;

export const Title = styled.h1`
    font-size: 24px;    
`;

