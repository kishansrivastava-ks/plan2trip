import styled from "styled-components";
import { FaArrowRight, FaEdit } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  box-shadow: 2px 2px 6px 0px #00000040, -2px -2px 4px 0px #00000040;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
`;

const BulletCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.8rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const LeftColumn = styled.div`
  flex: 8;
  position: relative;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const EditButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: #2a93d5;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #237ab8;
  }
`;

const RightColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Detail = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  color: #333;
`;

const ArrowButton = styled.button`
  align-self: flex-end;
  background-color: white;
  border: 2px solid #333;
  color: #333;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #333;
    color: white;
  }
`;

const AddStayButton = styled.button`
  background-color: #2a93d5;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: #237ab8;
  }
`;

function Stay() {
  return (
    <Container>
      {/* Title */}
      <Heading>
        <BulletCircle />
        <Title>Stay</Title>
      </Heading>

      {/* Main Content */}
      <ContentContainer>
        {/* Left Column */}
        <LeftColumn>
          <ImageContainer>
            <Image
              src="https://via.placeholder.com/400x300" // Replace with actual image URL
              alt="Stay Image"
            />
            <EditButton>
              <FaEdit />
            </EditButton>
          </ImageContainer>
        </LeftColumn>

        {/* Right Column */}
        <RightColumn>
          <DetailsContainer>
            <Detail>Hotel: Taj Villa</Detail>
            <Detail>Double Sharing Room</Detail>
            <Detail>Full AC Room</Detail>
          </DetailsContainer>
          <ArrowButton>
            <FaArrowRight />
          </ArrowButton>
        </RightColumn>
      </ContentContainer>

      {/* Add Stay Button */}
      <AddStayButton>Add Stay</AddStayButton>
    </Container>
  );
}

export default Stay;
