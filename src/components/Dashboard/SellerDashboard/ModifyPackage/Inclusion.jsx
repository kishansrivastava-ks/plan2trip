import { useState } from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

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
  height: 40rem; /* Fixed height for the container */
`;

const LeftColumn = styled.div`
  width: 30%;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #159fd3;
    border-radius: 10px;
  }
`;

const LeftItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#159FD3" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #159fd3;
    color: white;
  }
`;

const LeftItem = styled.span`
  font-size: 1.6rem;
`;

const TrashIcon = styled(FaTrash)`
  cursor: pointer;
  color: ${(props) => (props.active ? "white" : "#555")};

  &:hover {
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
  padding: 1rem;
  border-top: 1px solid #ddd;
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
  padding: 1rem;
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
  padding: 1rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #159fd3;
    border-radius: 10px;
  }
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BulletPointContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;
  margin-left: 1rem;
`;

const BulletPoint = styled.span`
  &::before {
    content: "•";
    margin-right: 0.5rem;
    color: #159fd3;
  }
`;

const AddPointContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: sticky;
  bottom: 0;
  background-color: #fff;
  padding: 1rem;
  border-top: 1px solid #ddd;
`;

const AddPointInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1.6rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const AddPointButton = styled.button`
  background-color: #2a93d5;
  color: white;
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #237ab8;
  }
`;

function Inclusion() {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
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
        <BulletCircle />
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
                <TrashIcon onClick={() => deletePoint(index)} />
              </BulletPointContainer>
            ))}
          </TabContent>
          <AddPointContainer>
            <AddPointInput
              value={newPoint}
              onChange={(e) => setNewPoint(e.target.value)}
              placeholder="New Point"
            />
            <AddPointButton onClick={addPoint}>Add Point</AddPointButton>
          </AddPointContainer>
        </RightColumn>
      </ContentContainer>
    </Container>
  );
}

export default Inclusion;
