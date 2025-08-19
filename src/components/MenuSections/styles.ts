import styled from "styled-components";

export const Container = styled.div``;

export const Separator = styled.hr`
    border: 1px solid ${props => props.theme.colors.text};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0 10px;
    margin: 15px 0;
`;