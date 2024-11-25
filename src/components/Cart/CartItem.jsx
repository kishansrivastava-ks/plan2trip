/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  width: 90%;
  height: 42rem;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 3rem;
  gap: 2rem;
`;

const ImageContainer = styled.div`
  flex: 3;
  background: url("tour-package-thumb.jpeg") center/cover no-repeat;
  border-radius: 24px 0 0 24px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const DetailsContainer = styled.div`
  flex: 1.1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid lightgray;
  border-radius: 0 24px 24px 0;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  color: #000;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Text = styled.p`
  font-size: 1.8rem;
  color: #000;
`;

const Ratings = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #000;

  .star-icon {
    color: #ffd700;
  }
`;

const Travelers = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.8rem;
  color: #000;

  button {
    background: #159fd3;
    color: #fff;
    border: none;
    border-radius: 4px;
    width: 3rem;
    height: 3rem;
    font-size: 1.8rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:disabled {
    /* background: #ccc; */
    cursor: not-allowed;
    background: #159fd3;
  }

  span {
    min-width: 2rem;
    text-align: center;
    background: #159fd3;
    color: #fff;
    padding: 0.2rem 2rem;
    border-radius: 4px;
  }
`;

const PriceSection = styled.div`
  margin-top: 2rem;
  border-top: 1px solid #ccc;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PriceText = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.8rem;
  font-weight: bold;

  &.subtotal {
    font-weight: normal;
  }
`;

const RemoveButton = styled.button`
  background: #159fd3;
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1.8rem;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    background: #1286ba;
  }
`;

const CartItem = ({ name, duration, ratings, reviews, price, key }) => {
  const [travelers, setTravelers] = useState(1);

  const handleIncrease = () => {
    setTravelers((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (travelers > 1) setTravelers((prev) => prev - 1);
  };

  return (
    <ItemContainer>
      <ImageContainer />
      <DetailsContainer>
        <div>
          <Title>Manali Tour Package</Title>
          <Text>Duration: 5 Nights - 4 Days</Text>
          <Ratings>
            <span className="star-icon">⭐</span>
            {4.5 / 5} ({2005} Reviews)
          </Ratings>
          <Travelers>
            Travelers:
            <button onClick={handleDecrease} disabled={travelers <= 1}>
              -
            </button>
            <span>{travelers} Travellers</span>
            <button onClick={handleIncrease}>+</button>
          </Travelers>
        </div>
        <PriceSection>
          <PriceText className="subtotal">Sub-Total:</PriceText>
          <PriceText>${travelers * 400}</PriceText>
          <RemoveButton>Remove</RemoveButton>
        </PriceSection>
      </DetailsContainer>
    </ItemContainer>
  );
};

export default CartItem;
