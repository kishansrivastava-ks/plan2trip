import styled from "styled-components";
import CartItems from "../components/Cart/CartItems";

const Container = styled.div`
  margin-top: 15vh;
`;
const Heading = styled.h1`
  text-transform: uppercase;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
  /* margin-top: 12rem; */
`;

function MyCart() {
  return (
    <Container>
      <Heading>Cart</Heading>
      <CartItems />
    </Container>
  );
}

export default MyCart;
