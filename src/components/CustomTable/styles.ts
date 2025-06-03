import ButtonImp from "../Button";
import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  /* margin-top: 16px; */
  table-layout: auto;
  border: 1px solid lightgray;
  border-radius: 20px;
`;

export const TableHead = styled.thead`
  background-color: #f5f5f5;
  border: 1px solid lightgray;
`;

export const TableMenu = styled.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border: 1px solid lightgray;
`;

export const TableRow = styled.tr`
  
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TableData = styled.td`
  padding: 12px;
  text-align: left;
  border: 1px solid lightgray;  
`;

export const TableMenuButtons = styled(TableMenu)`
  text-align: center;
  width: 200px;
`

export const TableButtons = styled(TableData)`
  padding: 10px;
  
  text-align: center;
  /* justify-content: space-around; */
  width: 200px;
  /* border: 0;   */
`;

export const Button = styled(ButtonImp)`
  min-width: 80px;
`;

export const TableAddContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
`;