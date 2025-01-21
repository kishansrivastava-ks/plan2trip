import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";

// Container for the entire Highlights section
const HighlightsContainer = styled.div`
  width: 90%;
  margin: 2rem auto;
  margin-bottom: 8rem;
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

// Horizontal line below heading
const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #ddd;
  margin-bottom: 4rem;
`;

// Cards container for layout
const CardsContainer = styled.div`
  display: flex;
  gap: 2rem;
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
  height: 400px; /* Height according to 4:3 ratio for styling */
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  gap: 2px;
`;

// Upper part of the card containing the image
const CardImage = styled.div`
  flex: 4;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-position: center;
`;

// Lower part of the card containing location details
const CardDetails = styled.div`
  flex: 1;
  /* background-color: black; */
  background: #000000cc;

  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  text-align: center;
  font-size: 2rem;
`;

const LocationIcon = styled(FaMapMarkerAlt)`
  margin-right: 1rem;
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
