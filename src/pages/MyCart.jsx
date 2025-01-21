import styled from "styled-components";
import CartItems from "../components/Cart/CartItems";
import CostBreakdown from "../components/Cart/CostBreakdown";

const Container = styled.div`
  margin-top: 15vh;
`;
const Heading = styled.h1`
  text-transform: uppercase;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 3px;
  color: #000;
  font-weight: 800;
  font-family: "Integral CF", sans-serif;
`;

function MyCart() {
  return (
    <Container>
      <Heading>Cart</Heading>
      <CartItems />
      <CostBreakdown />
    </Container>
  );
}

export default MyCart;
