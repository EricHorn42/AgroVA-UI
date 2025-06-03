import styled from 'styled-components';

export const FabButton = styled.button`
  position: fixed;
  /* bottom: 2rem; */
  top: 155px;
  right: 1rem;
  width: 60px;
  height: 60px;
  background-color: ${props => props.theme.colors.button.floating};
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

export const NotesPanel = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  /* bottom: 6rem; */
  top: 220px;
  right: 2rem;
  width: 300px;
  max-height: ${({ $isOpen }) => ($isOpen ? '400px' : '0')};
  overflow: hidden;
  background-color: white;
  border: ${({ $isOpen }) => ($isOpen ? '1px solid #ddd' : 'none')};
  border-radius: 8px;  
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: max-height 0.4s ease, padding 0.4s ease;
  padding: ${({ $isOpen }) => ($isOpen ? '1rem' : '0')};
  z-index: 999;
`;
