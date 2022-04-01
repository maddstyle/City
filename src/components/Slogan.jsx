import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";

const Container = styled.div`
  height: 40vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  color: teal;
  margin: 20px;
  ${mobile({ textAlign: "center", fontSize: "30px", marginTop: "40px" })};
`;  

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;  
  ${mobile({ textAlign: "center", fontSize: "15px", marginBottom: "40px" })};
`;


const Slogan = () => {
  return (
    <Container>
      <Title>So Everyone Can <i>live</i> like This!</Title>
      <Desc>Beautiful and Affordable Furniture of Your Dreams</Desc>
    </Container>
  )
}

export default Slogan
