import styled from "styled-components";
import CartItems from "../components/Cart/CartItems";

const Container = styled.div`
  margin-top: 15vh;
`;
function MyCart() {
  return (
    <Container>
      <CartItems />
    </Container>
  );
}

export default MyCart;
