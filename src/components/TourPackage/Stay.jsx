import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
`;

const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #ddd;
  margin-bottom: 4rem;
`;

// Two Column Layout
const TwoColumnLayout = styled.div`
  display: flex;
  gap: 0.5rem;
  min-height: 40rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`;

// Left Column for Image
const LeftColumn = styled.div`
  flex: 7;
  background: url("room.jpg") center center / cover no-repeat;
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
  line-height: 1.5;
  font-size: 2rem;
  letter-spacing: 1px;
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
`;

// Buttons Section
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 3rem;
  /* border: 1px solid red; */
`;

// Individual Button
const Button = styled.button`
  background: linear-gradient(90deg, #1286ba 0%, #159cd0 100%);
  background: #159fd3;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 4rem;
  font-size: 1.8rem;
  letter-spacing: 1px;
  /* font-weight: bold; */
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }
`;

function Stay() {
  return (
    <StayContainer>
      <Heading>
        <BulletCircle />
        <Title>STAY</Title>
      </Heading>
      <HorizontalLine />

      <TwoColumnLayout>
        <LeftColumn />

        <RightColumn>
          <TextDetails>
            <p>Hotel : Taj Villa</p>
            <p>Double Sharing Room</p>
            <p>Full AC Room</p>
          </TextDetails>

          <ArrowCircle>
            <FaArrowRight />
          </ArrowCircle>
        </RightColumn>
      </TwoColumnLayout>

      <ButtonsContainer>
        <Button>Add to Cart</Button>
        <Button>Buy Now</Button>
      </ButtonsContainer>
    </StayContainer>
  );
}

export default Stay;
