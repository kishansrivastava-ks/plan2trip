/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

const Container = styled.div`
  width: 100%;
  box-shadow: 2px 2px 6px 0px #00000040, -2px -2px 4px 0px #00000040;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: #fff;
  border-radius: 10px;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  &::before {
    content: "\u2022";
    color: black;
    font-size: 2rem;
    margin-right: 10px;
  }
`;

const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #ddd;
  margin-bottom: 1.5rem;
`;

const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TabList = styled.div`
  display: flex;
  gap: 1rem;
`;

const Tab = styled.button`
  background-color: ${(props) => (props.active ? "#0297CF" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  font-weight: bold;
  padding: 0.5rem 2.5rem;
  border: none;
  cursor: pointer;
  border-radius: 10px 10px 0 0;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
  font-size: 1.8rem;
  /* padding-bottom: 0.8rem; */

  &:hover {
    background-color: #159fd3;
    color: white;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const ActionButton = styled.button`
  background-color: ${(props) => (props.primary ? "#2A93D5" : "#333333")};
  color: white;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  border: none;
  border-radius: 5px;
  margin-bottom: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? "#237AB8" : "#222222")};
  }
`;

const TabContent = styled.div`
  /* background: linear-gradient(180deg, #159fd3 0%, #1286ba 65.15%); */
  background-color: #0297cf;
  color: white;
  padding: 2rem;
  border-radius: 0 10px 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 30rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #159fd3;
    border-radius: 10px;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
`;

const TimelineBullet = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: white;
  margin-right: 1rem;
  position: relative;
  z-index: 1;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 5.5px;
  top: 12px;
  width: 2px;
  height: calc(100%);
  background-color: white;
`;

const TimelineContent = styled.div`
  padding-left: 1.5rem;
  /* margin: 1rem 0; */
  margin-bottom: 1rem;
  font-size: 2rem;
`;

function AddPkgItinerary() {
  const [activeDay, setActiveDay] = useState(1);
  const [itineraryDetails, setItineraryDetails] = useState({
    1: ["Morning departure", "Lunch", "Evening tour"],
  });

  const addDay = () => {
    const newDay = Object.keys(itineraryDetails).length + 1;
    setItineraryDetails({ ...itineraryDetails, [newDay]: [] });
    setActiveDay(newDay);
  };

  const removeDay = () => {
    if (Object.keys(itineraryDetails).length > 1) {
      const updatedDetails = { ...itineraryDetails };
      delete updatedDetails[activeDay];
      setItineraryDetails(updatedDetails);
      setActiveDay(Math.max(1, activeDay - 1));
    }
  };

  const addPoint = () => {
    setItineraryDetails({
      ...itineraryDetails,
      [activeDay]: [...itineraryDetails[activeDay], "New Point"],
    });
  };

  return (
    <Container>
      <Heading>
        <Title>Itinerary</Title>
      </Heading>
      <Tabs>
        <TabList>
          {Object.keys(itineraryDetails).map((day) => (
            <Tab
              key={day}
              active={activeDay === parseInt(day)}
              onClick={() => setActiveDay(parseInt(day))}
            >
              Day {day}
            </Tab>
          ))}
        </TabList>
        <ActionButtons>
          <ActionButton onClick={removeDay}>
            <span>
              <FiMinusCircle />
            </span>
            <span>Remove Day</span>
          </ActionButton>
          <ActionButton primary onClick={addDay}>
            <span>
              <FiPlusCircle />
            </span>
            <span>Add Day</span>
          </ActionButton>
        </ActionButtons>
      </Tabs>
      <TabContent>
        {itineraryDetails[activeDay]?.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineBullet />
            {index < itineraryDetails[activeDay].length - 1 && <TimelineLine />}
            <TimelineContent>{item}</TimelineContent>
          </TimelineItem>
        ))}
      </TabContent>
    </Container>
  );
}

export default AddPkgItinerary;
