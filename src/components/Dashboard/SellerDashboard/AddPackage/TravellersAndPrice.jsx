import styled from "styled-components";

const Container = styled.div`
  box-shadow: 2px 2px 6px 0px #00000040, -2px -2px 4px 0px #00000040;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Header = styled.div`
  /* border: 1px solid red; */
  display: flex;
  gap: 1rem;
  text-align: center;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 2rem;
`;
const Travellers = styled.div`
  flex-basis: 80%;
  /* background-color: yellow; */
  background-color: #f5f5f5;
  border: 2px solid #cccc;
  border-radius: 8px;
`;
const PriceHeader = styled.div`
  flex-basis: 20%;
  /* background-color: yellow; */
  background-color: #f5f5f5;
  border: 2px solid #cccc;
  border-radius: 8px;
`;

const Row = styled.div`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  text-align: center;
  & > span {
    flex-basis: 10%;
  }
  gap: 1rem;
  & > * {
    font-weight: bold;
    /* background-color: yellow; */
    padding: 0.5rem 1rem;
  }
`;
const Start = styled.div`
  flex-basis: 33.7%;
  background-color: #f5f5f5;
  border: 2px solid #cccc;
  border-radius: 8px;
`;
const End = styled.div`
  flex-basis: 33.7%;
  background-color: #f5f5f5;
  border: 2px solid #cccc;
  border-radius: 8px;
`;

const Price = styled.div`
  flex-basis: 19.7%;
  margin-left: auto;
  background-color: #f5f5f5;
  border: 2px solid #cccc;
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: flex-end;
`;
const AddRowBtn = styled.button`
  background-color: #2a93d5;
  color: white;
  border: none;
  padding: 0.5rem 3.5rem;
  font-size: 1.6rem;
  letter-spacing: 1px;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: #237ab8;
  }
`;

function TravellersAndPrice() {
  return (
    <Container>
      <Header>
        <Travellers>Number of Travellers</Travellers>
        <PriceHeader>Price (Per Person)</PriceHeader>
      </Header>
      <Row>
        <Start>1</Start>
        <span>to</span>
        <End>5</End>
        <Price>$8000</Price>
      </Row>
      <Row>
        <Start>6</Start>
        <span>to</span>
        <End>9</End>
        <Price>$7000</Price>
      </Row>
      <Row>
        <Start>10</Start>
        <span>to</span>
        <End>15</End>
        <Price>$6000</Price>
      </Row>
      <Row>
        <Start>16</Start>
        <span>to</span>
        <End>&gt; 20</End>
        <Price>$5000</Price>
      </Row>
      <ButtonContainer>
        <AddRowBtn>Add Row</AddRowBtn>
      </ButtonContainer>
    </Container>
  );
}

export default TravellersAndPrice;
