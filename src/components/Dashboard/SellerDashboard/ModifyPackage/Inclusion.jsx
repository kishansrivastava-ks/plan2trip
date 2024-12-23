/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

const Container = styled.div`
  width: 100%;
  box-shadow: 2px 2px 6px 0px #00000040, -2px -2px 4px 0px #00000040;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 10px;
  min-height: max-content;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
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

const ContentContainer = styled.div`
  display: flex;
  height: 30rem; /* Fixed height for the container */
  gap: 1rem;
`;

const LeftColumn = styled.div`
  width: 30%;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow-y: auto;
  padding-right: 1rem;

  /* &::-webkit-scrollbar {
    width: 80px;
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #159fd3;
    border-radius: 10px;
    display: none;
  } */
`;

const LeftItemContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: 0.5rem 1rem;
  margin-bottom: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#159FD3" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  transition: background-color 0.3s ease;
  border-radius: 5px;

  &:hover {
    background-color: #159fd3;
    color: white;
    /* font-weight: bold; */
  }

  .check_mark {
    background-color: ${(props) => (props.active ? "white" : "#159FD3")};
    color: ${(props) => (props.active ? "#159FD3" : "white")};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem;
    border-radius: 50%;
  }
`;

const LeftItem = styled.span`
  font-size: 1.8rem;
  letter-spacing: 1px;
  /* font-weight: bold; */
  margin-right: 1rem;
`;

const TrashIcon = styled(FaTrash)`
  cursor: pointer;
  color: ${(props) => (props.active ? "white" : "#555")};
  margin-left: auto;

  &:hover {
    color: red;
  }
`;

const PointTrash = styled(FaTrash)`
  color: #fff;
  &:hover {
    cursor: pointer;
    color: red;
  }
`;
const AddItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: sticky;
  bottom: 0;
  background-color: #fff;
  /* padding: 1rem; */
  /* border-top: 1px solid #ddd; */
  /* border: 2px solid red; */
`;

const AddItemInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1.6rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const AddItemButton = styled.button`
  background-color: #2a93d5;
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 5px;
  font-size: 1.6rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #237ab8;
  }
`;

const RightColumn = styled.div`
  width: 70%;
  padding: 2rem;
  overflow-y: auto;
  background-color: #0297cf;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* 
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #159fd3;
    border-radius: 10px;
  } */
  /* border: 2px solid red; */
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const BulletPointContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  /* border: 2px solid white; */
  padding: 0.5rem 1rem;
`;

const BulletPoint = styled.span`
  &::before {
    content: "•";
    margin-right: 1rem;
    color: #fff;
  }
`;

const AddPointContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: sticky;
  bottom: 0;
  background-color: transparent;
  /* padding: 1rem; */
  /* border-top: 1px solid #ddd; */
  /* border: 2px solid red; */
`;

const AddPointInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1.6rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const AddPointButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #fff;
  color: #000;
  padding: 1rem 2.5rem;
  border-radius: 5px;

  font-size: 1.6rem;
  /* font-weight: bold; */
  border: none;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #237ab8;
    color: #fff;
  }
`;

function Inclusion() {
  const [items, setItems] = useState([
    "Accomodation",
    "Meals",
    "Transport",
    "Guide",
    "Train/Flight",
  ]);
  const [activeItem, setActiveItem] = useState(0);
  const [points, setPoints] = useState(
    items.reduce((acc, item) => {
      acc[item] = ["Point 1", "Point 2"];
      return acc;
    }, {})
  );
  const [newItem, setNewItem] = useState("");
  const [newPoint, setNewPoint] = useState("");

  const addItem = () => {
    if (!newItem.trim()) return;
    const updatedItems = [...items, newItem.trim()];
    setItems(updatedItems);
    setPoints({ ...points, [newItem.trim()]: [] });
    setNewItem("");
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    const updatedPoints = { ...points };
    delete updatedPoints[items[index]];
    setItems(updatedItems);
    setPoints(updatedPoints);
    if (activeItem === index) setActiveItem(0);
  };

  const addPoint = () => {
    if (!newPoint.trim()) return;
    const updatedPoints = { ...points };
    updatedPoints[items[activeItem]].push(newPoint.trim());
    setPoints(updatedPoints);
    setNewPoint("");
  };

  const deletePoint = (pointIndex) => {
    const updatedPoints = { ...points };
    updatedPoints[items[activeItem]] = updatedPoints[items[activeItem]].filter(
      (_, i) => i !== pointIndex
    );
    setPoints(updatedPoints);
  };

  return (
    <Container>
      <Heading>
        <Title>Inclusion</Title>
      </Heading>
      <ContentContainer>
        {/* Left Column */}
        <LeftColumn>
          {items.map((item, index) => (
            <LeftItemContainer
              key={index}
              active={index === activeItem}
              onClick={() => setActiveItem(index)}
            >
              <LeftItem>{item}</LeftItem>
              <span className="check_mark">
                <FiCheck />
              </span>
              <TrashIcon
                active={index === activeItem}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteItem(index);
                }}
              />
            </LeftItemContainer>
          ))}
          <AddItemContainer>
            <AddItemInput
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="New Item"
            />
            <AddItemButton onClick={addItem}>Add Item</AddItemButton>
          </AddItemContainer>
        </LeftColumn>

        {/* Right Column */}
        <RightColumn>
          <TabContent>
            {points[items[activeItem]]?.map((point, index) => (
              <BulletPointContainer key={index}>
                <BulletPoint>{point}</BulletPoint>
                {/* <TrashIcon onClick={() => deletePoint(index)} /> */}
                <PointTrash onClick={() => deletePoint(index)} />
              </BulletPointContainer>
            ))}
          </TabContent>
          <AddPointContainer>
            <AddPointInput
              value={newPoint}
              onChange={(e) => setNewPoint(e.target.value)}
              placeholder="New Point"
            />
            <AddPointButton onClick={addPoint}>
              <span>
                <FiPlusCircle />
              </span>
              Add Point
            </AddPointButton>
          </AddPointContainer>
        </RightColumn>
      </ContentContainer>
    </Container>
  );
}

export default Inclusion;
