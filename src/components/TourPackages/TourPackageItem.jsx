/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  width: 90%;
  height: 42rem;
  /* border: 1px solid #ddd; */
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
  justify-content: space-around;
  border: 2px solid lightgray;
  border-radius: 0 24px 24px 0;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  /* border: 2px solid red; */
`;

const Title = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  color: #000;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  /* border: 1px solid red; */
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
    background: #159dd1;
    color: #fff;
    border: none;
    border-radius: 4px;
    width: 2rem;
    height: 2rem;
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
`;

const Price = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #000;

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
`;

const Button = styled.button`
  background: ${({ outline }) => (outline ? "transparent" : "#159dd1")};
  border: 2px solid #159dd1;
  color: ${({ outline }) => (outline ? "#159dd1" : "#fff")};
  padding: 0.8rem 1rem;
  font-size: 1.8rem;
  letter-spacing: 1px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: -1.5rem;

  &:hover {
    background: ${({ outline }) => (outline ? "#159dd1" : "transparent")};
    color: ${({ outline }) => (outline ? "#fff" : "#159dd1")};
  }
`;

const TourPackageItem = ({ name, duration, ratings, reviews, price, key }) => {
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
        {/* <Title>{name}</Title> */}
        <Title>Manali Tour Package</Title>
        {/* <Text>{duration}</Text> */}
        <Text>Duration: 5 Nights - 4 Days</Text>
        <Ratings>
          <span className="star-icon">⭐</span>
          {/* {ratings} ({reviews} Reviews) */}
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
          {/* Price: <span className="price">${price} per person</span> */}
          Price : <span className="price">${400} </span> Per Person
        </Price>
        <Button>Add to Cart</Button>
        <Button outline>See Details</Button>
      </DetailsContainer>
    </ItemContainer>
  );
};

export default TourPackageItem;
