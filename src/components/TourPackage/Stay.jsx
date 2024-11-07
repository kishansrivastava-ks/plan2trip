import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

// Main Stay Component Container
const StayContainer = styled.div`
  width: 90%;
  margin: 2rem auto;
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
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
  margin-right: 0.8rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #ddd;
  margin-bottom: 1.5rem;
`;

// Two Column Layout
const TwoColumnLayout = styled.div`
  display: flex;
  gap: 1rem; /* Fine white space between the columns */
`;

// Left Column for Image
const LeftColumn = styled.div`
  flex: 8;
  background: url("room.jpg") center center / cover no-repeat;
  border-radius: 5px;
`;

// Right Column
const RightColumn = styled.div`
  flex: 2;
  background-color: black;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
`;

// Text Details in Right Column
const TextDetails = styled.div`
  line-height: 1.8;
  font-size: 1.1rem;
`;

// Circle with Arrow
const ArrowCircle = styled.div`
  align-self: flex-end;
  width: 50px;
  height: 50px;
  background-color: white;
  color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

// Buttons Section
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

// Individual Button
const Button = styled.button`
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }
`;

function Stay() {
  return (
    <StayContainer>
      {/* Heading Section */}
      <Heading>
        <BulletCircle />
        <Title>STAY</Title>
      </Heading>
      <HorizontalLine />

      {/* Two Column Layout */}
      <TwoColumnLayout>
        {/* Left Column with Image */}
        <LeftColumn />

        {/* Right Column with Text and Arrow */}
        <RightColumn>
          <TextDetails>
            <p>Hotel : Taj Villa</p>
            <p>Double Sharing Room</p>
            <p>Full AC Room</p>
          </TextDetails>

          {/* Arrow Circle */}
          <ArrowCircle>
            <FaArrowRight />
          </ArrowCircle>
        </RightColumn>
      </TwoColumnLayout>

      {/* Buttons Section */}
      <ButtonsContainer>
        <Button>ADD TO CART</Button>
        <Button>BUY NOW</Button>
      </ButtonsContainer>
    </StayContainer>
  );
}

export default Stay;
