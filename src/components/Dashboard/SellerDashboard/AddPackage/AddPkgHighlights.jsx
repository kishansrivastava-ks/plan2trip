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
  border-radius: 10px;
  gap: 1rem;
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

const HighlightsContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 29rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 5%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 1) 15%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(0, 0, 0, 0) 100%
    );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const UpperRow = styled.div`
  flex: 8;
  position: relative;
  background-color: ${(props) => (props.image ? "none" : "#C4C4C4")};
  background-image: ${(props) =>
    props.image ? `url(${props.image})` : "none"};
  background-size: cover;
  background-position: center;
  border-radius: 12px 12px 0 0;
  cursor: pointer;

  &:hover ${Overlay} {
    opacity: 1;
  }
`;

const Button = styled.button`
  /* background-color: ${(props) => (props.danger ? "#333" : "#2A93D5")}; */
  background-color: #fff;
  color: #000;
  border: none;
  width: 18rem;
  padding: 0.8rem 2rem;
  font-size: 1.6rem;
  border-radius: 5px;
  margin: 0.5rem 0;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.danger ? "red" : "#237AB8")};
    /* color: ${(props) => (props.danger ? "#fff" : "##fff")}; */
    color: #fff;
  }
  &:last-child {
    margin-bottom: 1.5rem;
  }
`;

const BottomRow = styled.div`
  flex: 1.5;
  background-color: #333333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  letter-spacing: 2px;
  border-radius: 0 0 12px 12px;
  cursor: pointer;
`;

const AddHighlightButton = styled.button`
  background-color: #2a93d5;
  color: white;
  border: none;
  padding: 0.7rem 4rem;
  font-size: 1.8rem;
  letter-spacing: 1px;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: #237ab8;
  }
`;

// Component Function
const AddPkgHighlights = () => {
  const [highlights, setHighlights] = useState([
    { id: 1, name: "Abbey Waterfalls", image: "/highlight.jpg" },
    { id: 2, name: "Abbey Waterfalls", image: "/highlight.jpg" },
  ]);

  const handleAddHighlight = () => {
    const newHighlight = {
      id: Date.now(),
      name: "Text here",
      image: "/default-add-image.png",
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

export default AddPkgHighlights;
