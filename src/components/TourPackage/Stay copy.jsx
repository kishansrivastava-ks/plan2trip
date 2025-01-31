import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowRight } from "react-icons/fa";

// Animation keyframes
const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Main Stay Component Container
const StayContainer = styled.div`
  width: 90%;
  margin: 2rem auto;
  margin-bottom: 5rem;
`;

// Heading Section
const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const BulletCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: black;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 0.8rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  color: #000;
  letter-spacing: 1px;
`;

const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #ddd;
  margin-bottom: 4rem;
`;

// Two Column Layout with animation
const TwoColumnLayout = styled.div`
  display: flex;
  gap: 0.5rem;
  min-height: 40rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  animation: ${slideIn} 0.5s ease-out;
`;

// Left Column for Image
const LeftColumn = styled.div`
  flex: 7;
  background: ${(props) =>
    `url(${props.image}) center center / cover no-repeat`};
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

// Right Column
const RightColumn = styled.div`
  flex: 2;
  background-color: #333333;
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;

// Text Details in Right Column
const TextDetails = styled.div`
  line-height: 1.8;
  font-size: 2.5rem;
  letter-spacing: 2px;
`;

// Circle with Arrow
const ArrowCircle = styled.div`
  align-self: flex-end;
  width: 60px;
  height: 60px;
  background-color: white;
  color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

// Buttons Section
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 3rem;
`;

// Individual Button
const Button = styled.button`
  background: ${(props) => (props.cartBtn ? "#fff" : "#159fd3")};
  color: ${(props) => (props.cartBtn ? "#000" : "#fff")};
  border: ${(props) => (props.cartBtn ? "2px solid #159fd3" : "none")};
  border-radius: 8px;
  padding: 1rem 4rem;
  font-size: 1.8rem;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.cartBtn ? "#159fd3" : "#005bb5")};
    color: #fff;
  }
`;

// Sample stays data
const staysData = [
  {
    id: 1,
    image: "room.jpg",
    hotel: "Taj Villa",
    roomType: "Double Sharing Room",
    features: "Full AC Room",
  },
  {
    id: 2,
    image: "room.jpg",
    hotel: "Marriott Suite",
    roomType: "Executive Room",
    features: "Ocean View",
  },
  {
    id: 3,
    image: "room.jpg",
    hotel: "Hilton Resort",
    roomType: "Deluxe Suite",
    features: "Private Balcony",
  },
];

function Stay() {
  const [currentStayIndex, setCurrentStayIndex] = useState(0);
  const [key, setKey] = useState(0); // For forcing re-render with animation

  const handleNextStay = () => {
    setCurrentStayIndex((prev) => (prev + 1) % staysData.length);
    setKey((prev) => prev + 1); // Update key to trigger animation
  };

  const currentStay = staysData[currentStayIndex];

  return (
    <StayContainer>
      <Heading>
        <BulletCircle />
        <Title>STAY</Title>
      </Heading>
      <HorizontalLine />

      <TwoColumnLayout key={key}>
        <LeftColumn image={currentStay.image} />
        <RightColumn>
          <TextDetails>
            <p>Hotel: {currentStay.hotel}</p>
            <p>{currentStay.roomType}</p>
            <p>{currentStay.features}</p>
          </TextDetails>

          <ArrowCircle onClick={handleNextStay}>
            <FaArrowRight />
          </ArrowCircle>
        </RightColumn>
      </TwoColumnLayout>

      <ButtonsContainer>
        <Button cartBtn={true}>Add to Cart</Button>
        <Button>Buy Now</Button>
      </ButtonsContainer>
    </StayContainer>
  );
}

export default Stay;
