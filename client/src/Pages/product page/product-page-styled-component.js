import styled from "styled-components";

export const Heading = styled.h1`
  margin-top: 10px;
  @media only screen and (min-width: 300px) and (max-width : 1000px){
    font-size : 20px;
    width: 425px;
  }
`

export const Cell = styled.td`
  width: 200px;
  padding: 5px;
  @media only screen and (min-width: 300px) and (max-width : 1000px){
    width: 400px;
  }
`