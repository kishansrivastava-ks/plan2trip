import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FiMinusCircle, FiPlusCircle, FiX } from "react-icons/fi";

const Container = styled.div`
  width: 100%;
  box-shadow: 2px 2px 6px 0px #00000040, -2px -2px 4px 0px #00000040;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: #fff;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 1.5rem;

    box-shadow: none;
    border-bottom: 1px solid black;
    border-radius: 0;
    padding-bottom: 4rem;
  }
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

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const TabList = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
    padding-bottom: 5px;

    &::-webkit-scrollbar {
      height: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #0297cf;
      border-radius: 4px;
    }

    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none; // Hide scrollbar for cleaner look
    }
  }
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

  &:hover {
    background-color: #159fd3;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding: 0.5rem 2rem;
    white-space: nowrap;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;

    & > button {
      flex: 1;
    }
    width: 100%;
    position: sticky;
    top: 0;
    background: white;
    padding: 0.5rem 0;
    z-index: 1;
  }
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

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 0.8rem 1.5rem;
    justify-content: center;

    & > span:last-child {
      display: none;
    }
  }
`;

const TabContent = styled.div`
  background-color: #0297cf;
  color: white;
  padding: 2rem;
  border-radius: 0 10px 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 40rem;
  overflow-y: auto;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-height: 50rem;
    padding: 1.5rem;
    max-height: 60vh; // Use viewport height instead of rem
    padding-bottom: 6rem; // Account for sticky AddPointButton
  }
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  /* border: 2px solid white; */

  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding-left: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const TimelineBullet = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: white;
  margin-right: 1rem;
  position: relative;
  z-index: 1;
  margin-top: 9px;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 5.5px;
  top: 18px;
  width: 2px;
  height: calc(100%);
  background-color: white;
`;

const TimelineContent = styled.div`
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  width: 100%;

  @media (max-width: 768px) {
    padding-left: 1rem;
    margin-bottom: 0.8rem;
    font-size: 1.6rem;
    gap: 0.5rem;
  }
`;

const AddPointButton = styled(ActionButton)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  padding: 0.8rem 1.5rem;
  background-color: white;
  color: #0297cf;

  &:hover {
    background-color: #f0f0f0;
    color: #0297cf;
  }

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    justify-content: center;
    bottom: 0.5rem;
    right: 1rem;

    & > span:last-child {
      display: inline; // Override ActionButton mobile styles
    }
  }

  @media (max-width: 768px) {
    position: sticky; // Change from absolute to sticky
    bottom: 0;
    margin: 1rem -1.5rem -1.5rem -1.5rem;
    width: calc(100% + 3rem);
    border-radius: 0 0 10px 10px;
  }
`;

const EditablePoint = styled.input`
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  width: 90%;
  padding: 0;

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    font-size: 1.6rem;
    width: 80%; // Slightly reduce width to prevent overflow
    padding: 0.5rem 0;
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem;

  &:hover {
    color: #f0f0f0;
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    margin: -0.8rem; // Increase touch target
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

function Itinerary() {
  const [activeDay, setActiveDay] = useState(1);
  const [itineraryDetails, setItineraryDetails] = useState({
    1: ["Morning departure", "Lunch", "Evening tour"],
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editingIndex !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingIndex]);

  const addDay = () => {
    const newDay = Object.keys(itineraryDetails).length + 1;
    setItineraryDetails({
      ...itineraryDetails,
      [newDay]: ["Add a point"],
    });
    setActiveDay(newDay);
    setEditingIndex(0);
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
    const updatedPoints = [...itineraryDetails[activeDay], "Add a point"];
    setItineraryDetails({
      ...itineraryDetails,
      [activeDay]: updatedPoints,
    });
    setEditingIndex(updatedPoints.length - 1);
  };

  const removePoint = (index) => {
    const updatedPoints = itineraryDetails[activeDay].filter(
      (_, i) => i !== index
    );
    setItineraryDetails({
      ...itineraryDetails,
      [activeDay]: updatedPoints,
    });
  };

  const handlePointChange = (index, value) => {
    const updatedPoints = [...itineraryDetails[activeDay]];
    updatedPoints[index] = value;
    setItineraryDetails({
      ...itineraryDetails,
      [activeDay]: updatedPoints,
    });
  };

  const handleBlur = (index, value) => {
    if (value.trim() === "" || value === "Add a point") {
      const updatedPoints = [...itineraryDetails[activeDay]];
      if (updatedPoints.length === 1) {
        updatedPoints[index] = "Add a point";
      } else {
        updatedPoints.splice(index, 1);
      }
      setItineraryDetails({
        ...itineraryDetails,
        [activeDay]: updatedPoints,
      });
    }
    setEditingIndex(null);
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
            <TimelineContent>
              {editingIndex === index ? (
                <EditablePoint
                  ref={inputRef}
                  type="text"
                  value={item}
                  onChange={(e) => handlePointChange(index, e.target.value)}
                  onBlur={(e) => handleBlur(index, e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleBlur(index, e.target.value);
                    }
                  }}
                />
              ) : (
                <>
                  <span onClick={() => setEditingIndex(index)}>{item}</span>
                  <DeleteButton onClick={() => removePoint(index)}>
                    <FiX size={20} />
                  </DeleteButton>
                </>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
        <AddPointButton onClick={addPoint}>
          <FiPlusCircle />
          <span>Add Point</span>
        </AddPointButton>
      </TabContent>
    </Container>
  );
}

export default Itinerary;
