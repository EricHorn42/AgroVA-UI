import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.background.tertiary};
  font-size: 20px;
  color: white;
  height: 50px;
  width: 100%;
  cursor: pointer;
  border-radius: 10px;
  padding: 0 20px;  
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.quaternary};
  }
`;

export const IconWrapper = styled.div`
  margin-right: 20px;
`;

export const TextWrapper = styled.span<{ $visible: boolean }>`
  opacity: ${({$visible}) => ($visible ? 1 : 0)};
  transition: opacity 0.5s ease;
  white-space: nowrap;
  overflow: hidden;
`;
