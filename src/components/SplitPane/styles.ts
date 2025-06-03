import styled from "styled-components";

export const SplitPaneContainer = styled.div<{ isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    resize: ${({isOpen}) => (isOpen ? 'vertical' : 'none')};
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    min-height: 60px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: all 0.3s ease-in-out, height 0s, max-height 0.4s ease, padding 0.4s ease;
    max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
    padding: ${({ isOpen }) => (isOpen ? '1rem' : '0 1rem')};
    background-color: #f1f1f1;
  
    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
    }
    h2 {
        margin: 0;
        padding: 10px 0;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    hr {
        border: 0;
        border-top: 1px solid #ccc;
        margin: 10px 0;
    }
    & > div {
        flex-grow: 1;
        overflow-y: auto;
    }
    & > div > div {
        padding: 10px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
`;

export const ToggleButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.colors.button.floating};
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const Menu = styled.h2`
display: flex;
justify-content: space-between;
`;