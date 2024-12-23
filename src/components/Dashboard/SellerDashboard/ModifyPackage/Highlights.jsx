/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import { FaEdit, FaTrash, FaImage } from "react-icons/fa";

// Styled Components
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

const HighlightsContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 30rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const UpperRow = styled.div`
  flex: 8;
  position: relative;
  background-color: ${(props) => (props.image ? "none" : "#C4C4C4")};
  background-image: ${(props) =>
    props.image ? `url(${props.image})` : "none"};
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent,
    white,
    rgba(0, 0, 0, 0.8)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const Button = styled.button`
  background-color: ${(props) => (props.danger ? "#333" : "#2A93D5")};
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
  margin: 0.5rem 0;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.danger ? "#555" : "#237AB8")};
  }
`;

const BottomRow = styled.div`
  flex: 2;
  background-color: #333333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
`;

const AddHighlightButton = styled.button`
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

// Component Function
const Highlights = () => {
  const [highlights, setHighlights] = useState([
    { id: 1, name: "Highlight 1", image: "https://via.placeholder.com/400" },
    { id: 2, name: "Highlight 2", image: "https://via.placeholder.com/400" },
  ]);

  const handleAddHighlight = () => {
    const newHighlight = {
      id: Date.now(),
      name: "Text here",
      image: null,
    };
    setHighlights([...highlights, newHighlight]);
  };

  const handleDeleteHighlight = (id) => {
    setHighlights(highlights.filter((highlight) => highlight.id !== id));
  };

  const handleEditHighlight = (id, type) => {
    if (type === "name") {
      const newName = prompt("Enter new name:");
      setHighlights(
        highlights.map((highlight) =>
          highlight.id === id ? { ...highlight, name: newName } : highlight
        )
      );
    } else if (type === "image") {
      const newImage = prompt("Enter image URL:");
      setHighlights(
        highlights.map((highlight) =>
          highlight.id === id ? { ...highlight, image: newImage } : highlight
        )
      );
    }
  };

  return (
    <Container>
      {/* Title */}
      <Heading>
        <BulletCircle />
        <Title>Highlights</Title>
      </Heading>

      {/* Cards Container */}
      <HighlightsContainer>
        {highlights.map((highlight) => (
          <Card key={highlight.id}>
            <UpperRow
              image={highlight.image}
              onClick={() => handleEditHighlight(highlight.id, "image")}
            >
              <Overlay>
                <Button
                  danger
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteHighlight(highlight.id);
                  }}
                >
                  Remove Highlight
                </Button>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditHighlight(highlight.id, "name");
                  }}
                >
                  Edit Highlight
                </Button>
              </Overlay>
            </UpperRow>
            <BottomRow
              onClick={() => handleEditHighlight(highlight.id, "name")}
            >
              {highlight.name}
            </BottomRow>
          </Card>
        ))}
      </HighlightsContainer>

      {/* Add Highlight Button */}
      <AddHighlightButton onClick={handleAddHighlight}>
        Add Highlight
      </AddHighlightButton>
    </Container>
  );
};

export default Highlights;
