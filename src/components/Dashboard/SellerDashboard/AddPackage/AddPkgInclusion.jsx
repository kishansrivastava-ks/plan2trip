import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FiX, FiPlusCircle } from "react-icons/fi";

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
  height: 30rem;
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
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const LeftItemContainer = styled.div`
  display: flex;
  align-items: center;
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
  }
`;

const LeftItem = styled.span`
  font-size: 1.8rem;
  letter-spacing: 1px;
  margin-right: 1rem;
  width: 100%;
`;

const EditableLeftItem = styled.input`
  background: none;
  border: none;
  font-size: 1.8rem;
  letter-spacing: 1px;
  color: inherit;
  width: 100%;
  padding: 0;
  margin-right: 1rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(props) =>
      props.active ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.5)"};
  }
`;

const CrossIcon = styled(FiX)`
  cursor: pointer;
  color: ${(props) => (props.active ? "white" : "#555")};
  margin-left: auto;

  &:hover {
    color: red;
  }
`;

const PointCross = styled(FiX)`
  color: #fff;
  &:hover {
    cursor: pointer;
    color: red;
  }
`;

const AddItemButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #2a93d5;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-size: 1.6rem;
  border: none;
  cursor: pointer;
  margin-top: auto;
  width: 100%;
  justify-content: center;

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
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
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
  padding: 0.5rem 1rem;
`;

const BulletPoint = styled.span`
  &::before {
    content: "•";
    margin-right: 1rem;
    color: #fff;
  }
  width: 100%;
`;

const EditableBulletPoint = styled.input`
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  width: 90%;
  padding: 0;
  margin-left: 2.5rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const AddPointButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #fff;
  color: #000;
  padding: 1rem 2.5rem;
  border-radius: 5px;
  font-size: 1.6rem;
  border: none;
  cursor: pointer;
  margin-top: auto;

  &:hover {
    background-color: #237ab8;
    color: #fff;
  }
`;

function AddPkgInclusion() {
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
  const [editingItem, setEditingItem] = useState(null);
  const [editingPoint, setEditingPoint] = useState(null);
  const itemInputRef = useRef(null);
  const pointInputRef = useRef(null);

  useEffect(() => {
    if (editingItem !== null && itemInputRef.current) {
      itemInputRef.current.focus();
    }
  }, [editingItem]);

  useEffect(() => {
    if (editingPoint !== null && pointInputRef.current) {
      pointInputRef.current.focus();
    }
  }, [editingPoint]);

  const addItem = () => {
    const newItems = [...items, "Add new item"];
    setItems(newItems);
    setPoints({ ...points, ["Add new item"]: [] });
    setEditingItem(items.length);
    setActiveItem(items.length);
  };

  const handleItemChange = (index, value) => {
    if (value.trim() === "") return;
    const updatedItems = [...items];
    const oldValue = updatedItems[index];
    updatedItems[index] = value;

    const updatedPoints = { ...points };
    updatedPoints[value] = updatedPoints[oldValue];
    delete updatedPoints[oldValue];

    setItems(updatedItems);
    setPoints(updatedPoints);
  };

  const handleItemBlur = (index, value) => {
    if (value.trim() === "" || value === "Add new item") {
      const updatedItems = [...items];
      const updatedPoints = { ...points };

      delete updatedPoints[updatedItems[index]];
      updatedItems.splice(index, 1);

      setItems(updatedItems);
      setPoints(updatedPoints);
      setActiveItem(Math.max(0, index - 1));
    }
    setEditingItem(null);
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
    const updatedPoints = { ...points };
    updatedPoints[items[activeItem]] = [
      ...(updatedPoints[items[activeItem]] || []),
      "Add new point",
    ];
    setPoints(updatedPoints);
    setEditingPoint(updatedPoints[items[activeItem]].length - 1);
  };

  const handlePointChange = (index, value) => {
    if (value.trim() === "") return;
    const updatedPoints = { ...points };
    updatedPoints[items[activeItem]][index] = value;
    setPoints(updatedPoints);
  };

  const handlePointBlur = (index, value) => {
    if (value.trim() === "" || value === "Add new point") {
      const updatedPoints = { ...points };
      updatedPoints[items[activeItem]] = updatedPoints[
        items[activeItem]
      ].filter((_, i) => i !== index);
      setPoints(updatedPoints);
    }
    setEditingPoint(null);
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
        <LeftColumn>
          {items.map((item, index) => (
            <LeftItemContainer
              key={index}
              active={index === activeItem}
              onClick={() => {
                if (editingItem === null) {
                  setActiveItem(index);
                }
              }}
            >
              {editingItem === index ? (
                <EditableLeftItem
                  ref={itemInputRef}
                  value={item}
                  active={index === activeItem}
                  onChange={(e) => handleItemChange(index, e.target.value)}
                  onBlur={(e) => handleItemBlur(index, e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleItemBlur(index, e.target.value);
                    }
                  }}
                />
              ) : (
                <LeftItem onClick={() => setEditingItem(index)}>
                  {item}
                </LeftItem>
              )}
              <CrossIcon
                active={index === activeItem}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteItem(index);
                }}
              />
            </LeftItemContainer>
          ))}
          <AddItemButton onClick={addItem}>
            <FiPlusCircle />
            Add Item
          </AddItemButton>
        </LeftColumn>

        <RightColumn>
          <TabContent>
            {points[items[activeItem]]?.map((point, index) => (
              <BulletPointContainer key={index}>
                {editingPoint === index ? (
                  <EditableBulletPoint
                    ref={pointInputRef}
                    value={point}
                    onChange={(e) => handlePointChange(index, e.target.value)}
                    onBlur={(e) => handlePointBlur(index, e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handlePointBlur(index, e.target.value);
                      }
                    }}
                  />
                ) : (
                  <BulletPoint onClick={() => setEditingPoint(index)}>
                    {point}
                  </BulletPoint>
                )}
                <PointCross onClick={() => deletePoint(index)} />
              </BulletPointContainer>
            ))}
          </TabContent>
          <AddPointButton onClick={addPoint}>
            <FiPlusCircle />
            Add Point
          </AddPointButton>
        </RightColumn>
      </ContentContainer>
    </Container>
  );
}

export default AddPkgInclusion;
