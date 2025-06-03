import styled from "styled-components";

export const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* height: 100vh; */
    /* background-color: #f0f0f0; */
    padding: 10px;
    height: calc(100vh - 150px);
    /* box-sizing: border-box; */
    /* border-radius: 8px; */
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
    /* margin: 20px; */
   
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;  
  p{
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const TopSection = styled.div`
  display: flex;
  height: 75%;
`;

export const BottomSection = styled.div`
  display: flex;
  height: 25%;
`;

export const Box = styled.div`
  /* flex: 1; */
  margin: 5px;
  /* flex: 1; */
  /* resize: 100%; */
  /* resize: both; */
  /* resize: horizontal; */
  resize: vertical;
  /* background-color: blue; */
`;

export const RightSection = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 25%;  
`;

export const BoxRight = styled(Box)`
  margin: 0;
  height: 50%;
  /* background-color: red; */
`;

export const BoxLeft = styled(Box)`
  width: 75%;
  /* background-color: black; */
`;

export const BoxBottomLeft = styled(Box)`
  width: 75%;
  /* background-color: yellow; */
`;

export const BoxBottomRight = styled(Box)`
  width: 25%;
  /* background-color: green; */
`;
