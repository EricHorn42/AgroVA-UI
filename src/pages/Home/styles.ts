import styled from "styled-components";

export const Container = styled.div`
  background-color: beige;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-items: auto;  
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 10px auto;
`;

export const Names = styled.div`
  display: grid;
  flex-grow: 1;
  width: 100%;
  grid-template-columns: auto auto auto;
  
`;

export const ButtonNames = styled.button`
  background-color: #f1f1f1;
  border: 1px solid black;
  padding: 10px;
  font-size: 30px;
  text-align: center;
`
