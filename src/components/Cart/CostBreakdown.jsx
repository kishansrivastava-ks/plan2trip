import styled from "styled-components";

const Container = styled.div`
  width: 85%;
  margin: auto;
  margin-bottom: 2rem;
  display: flex;
  justify-content: flex-end;
  /* margin-top: 2rem; */
  /* border: 2px solid red; */
`;

const BreakdownBox = styled.div`
  width: 40rem;
  background: #fff;
  padding: 2rem;
  /* border: 1px solid #ddd; */
  border-radius: 8px;
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
`;

const Heading = styled.h2`
  font-weight: bold;
  margin-bottom: 1.5rem;
  font-size: 3rem;
  text-align: center;
  color: #000;
`;

const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
  color: #000;
`;

const PayableRow = styled(ItemRow)`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  font-size: 2rem;
  letter-spacing: 1px;

  &:focus {
    outline: none;
  }
`;

const CheckoutButton = styled(Button)`
  background-color: #159fd3;
  color: #fff;
  border: none;

  &:hover {
    background-color: #1286ba;
  }
`;

const ContinueButton = styled(Button)`
  background-color: transparent;
  color: #000;
  border: 2px solid #159fd3;

  &:hover {
    background-color: #f0f8ff;
    color: #159fd3;
  }
`;

const CostBreakdown = () => {
  return (
    <Container>
      <BreakdownBox>
        <Heading>Cost Breakdown</Heading>
        <ItemRow>
          <span>Sub-Total</span>
          <span>$12500</span>
        </ItemRow>
        <ItemRow>
          <span>Discount</span>
          <span>$0</span>
        </ItemRow>
        <ItemRow>
          <span>Convenience Fees</span>
          <span>$40</span>
        </ItemRow>
        <ItemRow>
          <span>Taxes</span>
          <span>$100</span>
        </ItemRow>
        <PayableRow>
          <span>Payable Amount</span>
          <span>$12640</span>
        </PayableRow>
        <ButtonGroup>
          <CheckoutButton>Proceed to Checkout</CheckoutButton>
          <ContinueButton>Continue Shopping</ContinueButton>
        </ButtonGroup>
      </BreakdownBox>
    </Container>
  );
};

export default CostBreakdown;
