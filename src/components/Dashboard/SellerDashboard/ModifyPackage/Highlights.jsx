/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FaEdit, FaTrash, FaImage } from "react-icons/fa";

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
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  min-width: 29rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
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
  /* z-index: -1; */
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
  /* z-index: -2; */
`;

const Button = styled.button`
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

const EditableText = styled.input`
  background: none;
  border: none;
  color: white;
  text-align: center;
  font-size: 2.2rem;
  letter-spacing: 2px;
  width: 100%;
  padding: 0 1rem;
  &:focus {
    outline: none;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
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

const Highlights = () => {
  const [highlights, setHighlights] = useState([
    { id: 1, name: "Abbey Waterfalls", image: "/highlight.jpg" },
    { id: 2, name: "Abbey Waterfalls", image: "/highlight.jpg" },
  ]);
  const [editingId, setEditingId] = useState(null);
  const fileInputRef = useRef(null);
  const currentHighlightRef = useRef(null);

  const handleAddHighlight = () => {
    const newHighlight = {
      id: Date.now(),
      name: "New Highlight",
      image: "/default-add-image.png",
    };
    setHighlights([...highlights, newHighlight]);
  };

  const handleDeleteHighlight = (id) => {
    setHighlights(highlights.filter((highlight) => highlight.id !== id));
  };

  const handleNameChange = (id, newName) => {
    if (newName.trim() === "") return;
    setHighlights(
      highlights.map((highlight) =>
        highlight.id === id ? { ...highlight, name: newName } : highlight
      )
    );
  };

  const handleImageClick = (id) => {
    currentHighlightRef.current = id;
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setHighlights(
      highlights.map((highlight) =>
        highlight.id === currentHighlightRef.current
          ? { ...highlight, image: imageUrl }
          : highlight
      )
    );
    event.target.value = "";
  };

  return (
    <Container>
      <Heading>
        <Title>Highlights</Title>
      </Heading>

      <HighlightsContainer>
        {highlights.map((highlight) => (
          <Card key={highlight.id}>
            <UpperRow
              image={highlight.image}
              onClick={() => handleImageClick(highlight.id)}
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
                    handleImageClick(highlight.id);
                  }}
                >
                  Edit Highlight
                </Button>
              </Overlay>
            </UpperRow>
            <BottomRow onClick={() => setEditingId(highlight.id)}>
              {editingId === highlight.id ? (
                <EditableText
                  type="text"
                  value={highlight.name}
                  onChange={(e) =>
                    handleNameChange(highlight.id, e.target.value)
                  }
                  onBlur={() => setEditingId(null)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      setEditingId(null);
                    }
                  }}
                  autoFocus
                />
              ) : (
                highlight.name
              )}
            </BottomRow>
          </Card>
        ))}
      </HighlightsContainer>

      <HiddenFileInput
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
      />

      <AddHighlightButton onClick={handleAddHighlight}>
        Add Highlight
      </AddHighlightButton>
    </Container>
  );
};

export default Highlights;
