import ButtonImp from "../Button";
import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
  border-radius: 20px;  
`;

export const TableWrapper = styled.div`
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
  
  scrollbar-width: thin; /* Firefox */
  -ms-overflow-style: auto;  /* IE 10+ */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

export const TableBody = styled.tbody``;

export const TableHead = styled.thead`
  position: sticky;
  top: 0;
  border: 1px solid ${props => props.theme.colors.border};
  z-index: 1;
  background-color: ${props => props.theme.colors.background.tertiary};
`;

export const TableMenu = styled.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border: 1px solid ${props => props.theme.colors.border};
`;

export const TableRow = styled.tr`
  
  border: 1px solid ${props => props.theme.colors.border};
  &:nth-child(even) {
    background-color: ${props => props.theme.colors.background.secondary};
  }

  &:hover {
    background-color: ${props => props.theme.colors.background.tertiary};
  }
`;

export const TableData = styled.td`
  padding: 12px;
  text-align: left;
  border: 1px solid ${props => props.theme.colors.border};
`;

export const TableMenuButtons = styled(TableMenu)`
  text-align: center;
  width: 200px;
`

export const TableButtons = styled(TableData)`
  padding: 0px;
  text-align: center;
  width: 200px;
`;

export const Button = styled(ButtonImp)`
  min-width: 80px;
  margin: 0 5px;
`;

export const TableAddContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0 10px 10px ;
  height: 50px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > filter{
    width: 100%;
  }
`;
