import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;

const Info = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
`;

const Button = styled.button`
  margin-top: 30px;
  border: none;
  padding: 20px;
  font-size: 20px;
  background-color: white;
  color: teal;
  cursor: pointer;
  font-weight: 600;
  ${mobile({ fontSize: "14px", padding: "10px" })}
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/porducts/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>
            {item.title}
          </Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem
