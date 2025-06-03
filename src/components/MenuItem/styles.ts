import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.background.secondary};
  font-size: 20px;
  color: white;
  height: 50px;  
  cursor: pointer;
  border-radius: 10px; 

  > svg {
    margin: 0 20px;    
  }

  &:hover {
    background-color: black;
  }
`; 


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.background.secondary};
  font-size: 20px;
  color: white;
  height: 50px;
  cursor: pointer;
  border-radius: 10px;
  padding: 0 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: black;
  }
`;

export const IconWrapper = styled.div`
  margin-right: 12px;
`;

export const TextWrapper = styled.span<{ $visible: boolean }>`
  /* display: ${({$visible}) => ($visible ? 'inline' : 'none')}; */
  opacity: ${({$visible}) => ($visible ? 1 : 0)};
  transition: opacity 0.5s ease;
  white-space: nowrap;
  overflow: hidden;
`;
