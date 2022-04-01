import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line
import { mobile } from "../responsive";

const Container = styled.div`
  height: 10vh;
  margin-top: 150px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ marginTop: "70px" })};
`;

const Title = styled.h1`
  font-size: 40px;
  margin: 20px;
  ${mobile({ textAlign: "center", fontSize: "22px" })};
`;  


const FeaturedProdTitle = () => {
  return (
    <Container>
      <Title>FEATURED PRODUCTS</Title>
    </Container>
  )
}

export default FeaturedProdTitle
