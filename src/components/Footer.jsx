import { 
  Instagram,
  Facebook,
  Twitter,
  Pinterest,
  Phone,
  Room,
  MailOutline,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}

  /* align-items: center;
  justify-content: center;
  padding-left: 50px */
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 50px;
  height: 50px;
  color: white;
  border-radius: 50%;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
         <Title>Useful Links</Title>
        <List>
          <ListItem>Help Center</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Shipping and Delivery</ListItem>
          <ListItem>Track My Delivery</ListItem>
          <ListItem>Return Policy</ListItem>
          <ListItem>Contact Us</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>FAQ</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Left>
      <Center>
      <Logo>CITY.</Logo>
        <Desc>
          CITY CARES BRINGING OUR PURPOSE TO LIFE<br/>We strive to make the world a
          better place by acting<br/> on behalf of our community,our planet, and our
          associates.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />6701 North Hiatus Road, Tamarac, FL 33321
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/>(954) 718-3300
        </ContactItem>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/>MON - SUN: 10AM - 9PM
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
