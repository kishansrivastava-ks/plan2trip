import styled from "styled-components";

const MOBILE_BREAKPOINT = "768px";

const Container = styled.div`
  box-shadow: 2px 2px 6px 0px #00000040, -2px -2px 4px 0px #00000040;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 16px;
    /* margin: 1.5rem 1rem; */
    gap: 1rem;
    box-shadow: none;
    border-radius: 12px;
    border-bottom: 1px solid black;
    border-radius: 0;
    padding-bottom: 5rem;
  }
`;

const Header = styled.div`
  display: flex;
  gap: 1rem;
  text-align: center;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 2rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    gap: 0.75rem;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
`;

const Travellers = styled.div`
  flex-basis: 80%;
  background-color: #f5f5f5;
  border: 2px solid #cccc;
  border-radius: 8px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-basis: 100%;
    padding: 0.75rem;
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  }
`;

const PriceHeader = styled.div`
  flex-basis: 20%;
  background-color: #f5f5f5;
  border: 2px solid #cccc;
  border-radius: 8px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-basis: 100%;
    padding: 0.75rem;
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 1rem;

  & > span {
    flex-basis: 10%;
  }

  & > * {
    font-weight: bold;
    padding: 0.5rem 1rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0.75rem;
    margin-top: 0.5rem;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
    transition: transform 0.2s ease;

    &:active {
      transform: scale(0.98);
    }

    & > span {
      flex-basis: 100%;
      font-size: 0.875rem;
      padding: 0;
      color: #6c757d;
      margin: -0.25rem 0;
    }
  }
`;

const Start = styled.div`
  flex-basis: 33.7%;
  background-color: #f5f5f5;
  border: 2px solid #cccc;
  border-radius: 8px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-basis: 45%;
    padding: 0.75rem;
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    font-size: 1.125rem;
  }
`;

const End = styled.div`
  flex-basis: 33.7%;
  background-color: #f5f5f5;
  border: 2px solid #cccc;
  border-radius: 8px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-basis: 45%;
    padding: 0.75rem;
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    font-size: 1.125rem;
  }
`;

const Price = styled.div`
  flex-basis: 19.7%;
  margin-left: auto;
  background-color: #f5f5f5;
  border: 2px solid #cccc;
  border-radius: 8px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-basis: 100%;
    margin-left: 0;
    margin-top: 0.5rem;
    padding: 0.875rem;
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    font-size: 1.25rem;
    color: #2a93d5;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-top: 1.25rem;
  }
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
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #237ab8;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    padding: 0.875rem;
    font-size: 1.125rem;
    border-radius: 8px;
    background-color: #2a93d5;
    box-shadow: 0 2px 6px rgba(42, 147, 213, 0.2);

    &:active {
      transform: scale(0.98);
    }
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
