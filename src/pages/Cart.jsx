import React from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import SpecialOffer from "../components/SpecialOffer";
// import Footer from "../components/Footer";
import img from "../images/PasadenadiningRoom.jpg";
import img1 from "../images/outdoorFire.jpg";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  /* height: 100vh; */
`;

const Wrapper = styled.div`
  padding: 20px;
  height: 100vh;
  ${mobile({ padding: "10px" })} /* padding: 0px 80px; */
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin-top: 20px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 50px;
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 800;
  background-color: ${props =>
    props.type === "filled" ? "black" : "transparent"};
  border: ${props => props.type === "filled" && "none"};
  color: ${props => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const Desc = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const ProductSize = styled.span``;

const PriceDetails = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: teal;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px 15px;
  ${mobile({ marginTop: "15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 20px 0px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid #eee;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-size: 25px;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span`
  font-weight: 300;
  font-size: 20px;
`;

const SummaryButton = styled.button`
  width: 100%;
  margin-top: 30px;
  padding: 10px;
  border: 2px solid black; 
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <SpecialOffer />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(4)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src={img1} />
                <Desc>
                  <ProductName>
                    <b>Product:</b> LISBON FIRE PLACE
                  </ProductName>
                  <br />
                  <ProductId>
                    <b>SKU:</b> 23598837
                  </ProductId>
                  <ProductColor color="#6d635b" />
                  <ProductSize>
                    <b>Size:</b> 60"
                  </ProductSize>
                </Desc>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer >
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 1299</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src={img} />
                <Desc>
                  <ProductName>
                    <b>Product:</b> PASADENA DINING SET
                  </ProductName>
                  <br />
                  <ProductId>
                    <b>SKU:</b> 164780345
                  </ProductId>
                  <ProductColor color="rosybrown" />
                  <ProductSize>
                    <b>Size:</b> 94"
                  </ProductSize>
                </Desc>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 3799</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 5100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping</SummaryItemText>
              <SummaryItemPrice>$ 179</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>$ -50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 5229</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      {/* <Footer /> */}
    </Container>
  );
};

export default Cart;
