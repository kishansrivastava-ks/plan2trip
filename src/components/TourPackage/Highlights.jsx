import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";

const MOBILE_BREAKPOINT = "768px";

// Container for the entire Highlights section
const HighlightsContainer = styled.div`
  width: 90%;
  margin: 2rem auto;
  margin-bottom: 8rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 95%;
    margin: 1rem auto;
    margin-bottom: 4rem;
  }
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

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 2rem;
  }
`;

// Horizontal line below heading
const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #ddd;
  margin-bottom: 4rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-bottom: 2rem;
  }
`;

// Cards container for layout
const CardsContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 85%;
  margin: auto;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    width: 95%;
    gap: 1.5rem;
  }
`;

// Individual Card styling
const Card = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 400px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  gap: 2px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    height: 250px;
    border-radius: 8px;
  }
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
  background: #000000cc;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  text-align: center;
  font-size: 2rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 1.6rem;
    padding: 0.5rem;
  }
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
