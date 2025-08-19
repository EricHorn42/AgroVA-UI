import styled from "styled-components";


export const Select = styled.select`
    transition: 0.4s;
    width: auto;
    max-width: 200px;
    height: 25px;
    background-color: transparent;
    box-shadow: none;
    border: transparent transparent #fff transparent;
    user-select: none;
    margin-left: 10px;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 5px;

    >option {
        background-color: ${props => props.theme.colors.background.primary};
    }

`;

export const Container = styled.div`
    display: flex;
`;

export const Text = styled.span`
    font-size: 16px;    
    text-align: center;
    align-self: center;
`