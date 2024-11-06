import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";

// Container for the entire Highlights section
const HighlightsContainer = styled.div`
  width: 90%;
  margin: 2rem auto;
`;

// Heading section with bullet circle
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

// Horizontal line below heading
const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #ddd;
  margin-bottom: 1rem;
`;

// Cards container for layout
const CardsContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 85%;
  margin: auto;
`;

// Individual Card styling
const Card = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 300px; /* Height according to 4:3 ratio for styling */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// Upper part of the card containing the image
const CardImage = styled.div`
  flex: 3;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-position: center;
`;

// Lower part of the card containing location details
const CardDetails = styled.div`
  flex: 1;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  font-size: 1.1rem;
`;

const LocationIcon = styled(FaMapMarkerAlt)`
  margin-right: 0.5rem;
  color: white;
`;

function Highlights() {
  // Example highlights data
  const highlightsData = [
    { imgSrc: "manali-1.jpg", place: "Hidimba Devi Temple" },
    { imgSrc: "manali-2.jpg", place: "Solang Valley" },
    { imgSrc: "manali-3.jpg", place: "Rohtang Pass" },
    { imgSrc: "manali-4.jpg", place: "Manikaran Sahib" },
  ];

  return (
    <HighlightsContainer>
      <Heading>
        <BulletCircle />
        <Title>HIGHLIGHTS</Title>
      </Heading>
      <HorizontalLine />

      <CardsContainer>
        {highlightsData.map((highlight, index) => (
          <Card key={index}>
            <CardImage imgSrc={highlight.imgSrc} />
            <CardDetails>
              <LocationIcon />
              {highlight.place}
            </CardDetails>
          </Card>
        ))}
      </CardsContainer>
    </HighlightsContainer>
  );
}

export default Highlights;
