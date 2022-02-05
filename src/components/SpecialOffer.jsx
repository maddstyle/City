import styled from "styled-components"

const Container = styled.div`
  height: 40px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
`;

const SpecialOffer = () => {
  return (
    <Container>
        President's day sale starts now! These savings are making history
    </Container>
  )
}

export default SpecialOffer
