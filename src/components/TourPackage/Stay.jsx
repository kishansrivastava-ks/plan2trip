import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowRight } from "react-icons/fa";

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

const mobileBreakpoint = "768px";

const StayContainer = styled.div`
  width: 90%;
  margin: 2rem auto;
  margin-bottom: 5rem;

  @media (max-width: ${mobileBreakpoint}) {
    width: 95%;
    margin: 1rem auto;
    margin-bottom: 3rem;
  }
`;

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

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 2.4rem;
  }
`;

const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #ddd;
  margin-bottom: 4rem;

  @media (max-width: ${mobileBreakpoint}) {
    margin-bottom: 2rem;
  }
`;

const TwoColumnLayout = styled.div`
  display: flex;
  gap: 0.5rem;
  min-height: 40rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  animation: ${slideIn} 0.5s ease-out;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    min-height: auto;
    gap: 0;
  }
`;

const LeftColumn = styled.div`
  flex: 7;
  background: ${(props) =>
    `url(${props.image}) center center / cover no-repeat`};
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  min-height: 40rem;
  @media (max-width: ${mobileBreakpoint}) {
    height: 300px;
    min-height: 300px;
    border-bottom-left-radius: 0;
    border-top-right-radius: 15px;
    width: 100%;
    display: block;
  }
`;

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

  @media (max-width: ${mobileBreakpoint}) {
    border-top-right-radius: 0;
    border-bottom-left-radius: 15px;
    padding: 1.5rem;
    min-height: 200px;
  }
`;

const TextDetails = styled.div`
  line-height: 1.8;
  font-size: 2.5rem;
  letter-spacing: 2px;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 1.8rem;
    /* line-height: 1.5; */
    margin-top: auto;
    text-align: center;
  }
`;

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

  @media (max-width: ${mobileBreakpoint}) {
    width: 50px;
    height: 50px;
    font-size: 1.6rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 3rem;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }
`;

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

  @media (max-width: ${mobileBreakpoint}) {
    padding: 1.2rem;
    font-size: 1.6rem;
    width: 100%;
    text-align: center;
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
  const [key, setKey] = useState(0);

  const handleNextStay = () => {
    setCurrentStayIndex((prev) => (prev + 1) % staysData.length);
    setKey((prev) => prev + 1);
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
