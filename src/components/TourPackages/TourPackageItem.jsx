/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 3rem;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 42rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    gap: 0;
    /* border: 2px solid red; */
    border-radius: 24px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  min-height: 30rem;
  background: url("tour-package-thumb.jpeg") center/cover no-repeat;
  border-radius: 24px 24px 0 0;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    flex: 3;
    border-radius: 24px 0 0 24px;
  }
  @media (max-width: 768px) {
    box-shadow: none;
  }
`;

const DetailsContainer = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 2px solid lightgray;
  border-radius: 0 0 24px 24px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    flex: 1.1;
    border-radius: 0 24px 24px 0;
    justify-content: space-around;
    gap: 0;
  }
  @media (max-width: 768px) {
    border-top: none;
  }
`;

const Title = styled.h3`
  font-size: 2.2rem;
  font-weight: bold;
  color: #000;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 0;
  }
`;

const Text = styled.p`
  font-size: 1.6rem;
  color: #000;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Ratings = styled.div`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #000;

  .star-icon {
    color: #ffd700;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Travelers = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.6rem;
  color: #000;

  button {
    background: #159dd1;
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
    background: #ccc;
    cursor: not-allowed;
  }

  span {
    min-width: 2rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;

    button {
      width: 2rem;
      height: 2rem;
    }
  }
`;

const Price = styled.div`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #000;
  flex-wrap: wrap;

  & > span {
    margin-left: 1rem;
  }

  .price {
    background: #159dd1;
    color: #fff;
    padding: 0.3rem 3rem;
    border-radius: 5px;
    margin-right: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
    flex-wrap: nowrap;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    gap: 1rem;
    margin-top: 0;
  }
`;

const Button = styled.button`
  background: ${({ outline }) => (outline ? "transparent" : "#159dd1")};
  border: 2px solid #159dd1;
  color: ${({ outline }) => (outline ? "#159dd1" : "#fff")};
  padding: 1.2rem 1rem;
  font-size: 1.6rem;
  letter-spacing: 1px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;

  &:hover {
    background: ${({ outline }) => (outline ? "#159dd1" : "transparent")};
    color: ${({ outline }) => (outline ? "#fff" : "#159dd1")};
  }

  @media (min-width: 768px) {
    padding: 0.8rem 1rem;
    font-size: 1.8rem;
    margin-bottom: ${({ outline }) => (outline ? "0" : "-1.5rem")};
  }
`;

const TourPackageItem = ({ name, duration, ratings, reviews, price }) => {
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
          <span>
            {travelers} {travelers === 1 ? "Traveler" : `Travelers`}
          </span>
          <button onClick={handleIncrease}>+</button>
        </Travelers>
        <Price>
          Price : <span className="price">${400} </span> Per Person
        </Price>
        <ButtonContainer>
          <Button>Add to Cart</Button>
          <Button outline>See Details</Button>
        </ButtonContainer>
      </DetailsContainer>
    </ItemContainer>
  );
};

export default TourPackageItem;
