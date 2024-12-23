import { useState } from "react";
import styled from "styled-components";

// Container for the entire itinerary
const ItineraryContainer = styled.div`
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
`;

// Horizontal rule below heading
const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #ddd;
  margin-bottom: 4rem;
`;

// Tabs container
const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  /* margin-bottom: -1rem; */
`;

// Individual Tab button
const Tab = styled.button`
  background-color: ${(props) => (props.active ? "#159FD3" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border: none;
  cursor: pointer;
  border-radius: 12px 12px 0 0;
  transition: background-color 0.3s ease;
  /* border-bottom: ${(props) =>
    props.active ? "none" : "2px solid #007bff"}; */
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 2px;
  &:hover {
    background-color: #159fd3;
    color: white;
  }
`;

// Tab content container with timeline style
const TabContent = styled.div`
  background: linear-gradient(180deg, #159fd3 0%, #1286ba 65.15%);
  color: white;
  padding: 2rem;
  border-radius: 0 15px 15px 15px;
  /* border-radius: 15px; */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-height: 30rem;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

// Timeline item
const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  align-items: center;
  position: relative;
  /* border: 2px solid red; */
`;

const TimelineBullet = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: white;
  margin-right: 1rem;
  position: relative;
  z-index: 1;
`;

const TimelineContent = styled.div`
  padding-left: 1.5rem;
  margin: 1rem 0;
  font-size: 2.5rem;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 6px;
  top: 36px;
  width: 2px;
  height: 100%;
  background-color: white;
`;

function Itinerary() {
  const [activeDay, setActiveDay] = useState(1);

  // Example details for each day's itinerary
  const itineraryDetails = {
    1: [
      "Morning departure",
      "Sightseeing tour",
      "Lunch at local restaurant",
      "Check-in at hotel",
    ],
    2: [
      "Breakfast at hotel",
      "Guided museum tour",
      "Free time",
      "Dinner at beachside",
    ],
    3: [
      "Mountain trekking",
      "Picnic lunch",
      "Visit local market",
      "Return to hotel",
    ],
    4: ["Breakfast", "Scenic drive", "Lunch at resort", "Departure"],
  };

  return (
    <ItineraryContainer>
      <Heading>
        <BulletCircle />
        <Title>ITINERARY</Title>
      </Heading>
      <HorizontalLine />

      <Tabs>
        {Object.keys(itineraryDetails).map((day) => (
          <Tab
            key={day}
            active={activeDay === parseInt(day)}
            onClick={() => setActiveDay(parseInt(day))}
          >
            Day {day}
          </Tab>
        ))}
      </Tabs>

      <TabContent>
        {itineraryDetails[activeDay].map((item, index) => (
          <TimelineItem key={index}>
            <TimelineBullet />
            {index < itineraryDetails[activeDay].length - 1 && <TimelineLine />}
            <TimelineContent>{item}</TimelineContent>
          </TimelineItem>
        ))}
      </TabContent>
    </ItineraryContainer>
  );
}

export default Itinerary;
