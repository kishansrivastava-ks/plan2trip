/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { FaArrowRight, FaEdit } from "react-icons/fa";
import { useState } from "react";

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
  /* border: 1px solid re d; */

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 0.8rem;
  }
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

  @media (max-width: 768px) {
    font-size: 2rem;
    &::before {
      font-size: 1.6rem;
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const LeftColumn = styled.div`
  flex: 7;
  position: relative;

  @media (max-width: 768px) {
    flex: none;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 30rem;
  /* border-radius: 10px 0 0 10px; */
  /* border: 1px solid red; */

  @media (max-width: 768px) {
    height: 25rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px 0 0 12px;

  @media (max-width: 768px) {
    border-radius: 12px 12px 0 0;
  }
`;

const EditButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: #2a93d5;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #237ab8;
  }
`;

const RightColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #333333;
  border-radius: 0 12px 12px 0;
  padding: 2rem;

  @media (max-width: 768px) {
    border-radius: 0 0 12px 12px;
    padding: 1.5rem;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* border: 1px solid white; */
`;

const Detail = styled.div`
  font-size: 2rem;
  letter-spacing: 1px;
  font-weight: 500;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ArrowButton = styled.button`
  align-self: flex-end;
  background-color: white;
  border: 2px solid #333;
  color: #333;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #333;
    color: white;
  }
`;

const AddStayButton = styled.button`
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

  @media (max-width: 768px) {
    padding: 0.7rem 3rem;
    font-size: 1.6rem;
    width: 100%;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};
  transition: opacity 0.3s ease;
  z-index: 5;
`;

const EditStayModal = styled.div`
  background: white;
  border-radius: 8px;
  min-width: 75vw;
  min-height: max-content;
  padding: 4rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  position: relative;

  @media (max-width: 768px) {
    min-width: 90vw;
    padding: 2rem;
    max-height: 90vh;
    overflow-y: auto;
  }
`;
const EditStayHeader = styled.div``;
const EditStayDetails = styled.div`
  border: 2px solid #ccc;
  width: 100%;
  border-radius: 10px;
  padding: 2rem;

  & > div {
    display: flex;
    gap: 1rem;
    /* border: 2px solid red; */
    width: 30%;
    margin-top: 2rem;
  }
  & > ul {
    margin-left: 3rem;
    & > li {
      list-style: disc;
    }
  }
`;

const AddStayModal = styled.div`
  background: white;
  border-radius: 8px;
  min-width: 75vw;
  min-height: max-content;
  padding: 3rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    min-width: 90vw;
    padding: 2rem;
    max-height: 90vh;
    overflow-y: auto;
  }
`;

const AddPhotoContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  width: 100%;
  gap: 1rem;
  margin: 1rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;
const AddPhotoLeftCol = styled.div`
  /* border: 1px solid blue; */
  flex-basis: 75%;
  height: 30rem;
  background-image: url("/add-stay-bg.png");
  background-position: center;
  background-size: cover;

  @media (max-width: 768px) {
    flex-basis: auto;
    height: 20rem;
  }
`;
const AddPhotoRightCol = styled.div`
  /* border: 1px solid blue; */
  flex-basis: 25%;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-basis: auto;
  }
`;
const AddPhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  height: 23rem;
  overflow-y: auto;
  border-radius: 5px;
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
`;
const AddPhotoActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;
const ActionButton = styled.button`
  flex: 1;
  padding: 0.5rem 0.5rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  background-color: #2a93d5;

  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 1.4rem;
  }
`;

const AddDetailsContainer = styled.div`
  width: 75%;
  border-radius: 10px;
  border: 2px solid #ccc;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > input {
    width: 100%;
    border-radius: 5px;
    outline: none;
    padding: 0.5rem 1rem;
    border: 1px solid #cccc;
    &::placeholder {
      font-size: 1.5rem;
      letter-spacing: 1px;
    }
  }

  & > div {
    display: flex;
    gap: 1rem;
    max-width: 40%;
  }

  @media (max-width: 768px) {
    width: 100%;
    & > div {
      max-width: 100%;
    }
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: -0.4rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 3rem;
  cursor: pointer;

  @media (max-width: 768px) {
    top: 0.5rem;
    right: 1rem;
    font-size: 2.5rem;
  }
`;

function Stay() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditStayModalOpen, setEditStayModalOpen] = useState(false);
  const [isAddStayModalOpen, setAddStayModalOpen] = useState(false);

  return (
    <Container>
      {/* Title */}
      <Heading>
        <Title>Stay</Title>
      </Heading>

      {/* Main Content */}
      <ContentContainer>
        {/* Left Column */}
        <LeftColumn>
          <ImageContainer>
            <Image
              src="/room.jpg" // Replace with actual image URL
              alt="Stay Image"
            />
            <EditButton
              onClick={() => {
                setEditStayModalOpen(true);
                setAddStayModalOpen(false);
              }}
            >
              <FaEdit />
            </EditButton>
          </ImageContainer>
        </LeftColumn>

        {/* Right Column */}
        <RightColumn>
          <DetailsContainer>
            <Detail>Hotel: Taj Villa</Detail>
            <Detail>Double Sharing Room</Detail>
            <Detail>Full AC Room</Detail>
          </DetailsContainer>
          <ArrowButton>
            <FaArrowRight />
          </ArrowButton>
        </RightColumn>
      </ContentContainer>

      {/* Add Stay Button */}
      <AddStayButton
        onClick={() => {
          setAddStayModalOpen(true);
          setEditStayModalOpen(false);
        }}
      >
        Add Stay
      </AddStayButton>

      {/* MODALS for edit stay and add stay */}
      <ModalOverlay
        isVisible={isAddStayModalOpen}
        onClick={() => setAddStayModalOpen(false)}
      >
        <AddStayModal onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={() => setAddStayModalOpen(false)}>
            x
          </CloseButton>
          <h3>Photos:</h3>
          <AddPhotoContainer>
            <AddPhotoLeftCol></AddPhotoLeftCol>
            <AddPhotoRightCol>
              <AddPhotoGrid>No Photos</AddPhotoGrid>
              <AddPhotoActions>
                <ActionButton>Add Photo</ActionButton>
                <ActionButton>Remove Photo</ActionButton>
              </AddPhotoActions>
            </AddPhotoRightCol>
          </AddPhotoContainer>
          <AddDetailsContainer>
            <h3>Details:</h3>
            <input type="text" placeholder="Add your firt point here" />
            <div>
              <ActionButton>Add Point</ActionButton>
              <ActionButton>Remove Point</ActionButton>
            </div>
          </AddDetailsContainer>
        </AddStayModal>
      </ModalOverlay>

      <ModalOverlay
        isVisible={isEditStayModalOpen}
        onClick={() => setEditStayModalOpen(false)}
      >
        <EditStayModal onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={() => setEditStayModalOpen(false)}>
            x
          </CloseButton>
          <h3>Photos:</h3>
          <EditStayDetails>
            <h3>Details</h3>
            <ul>
              <li>Hotel Taj</li>
              <li>Double Sharing</li>
              <li>Full AC Rooms</li>
            </ul>
            <div>
              <ActionButton>Add Point</ActionButton>
              <ActionButton>Remove Point</ActionButton>
            </div>
          </EditStayDetails>
        </EditStayModal>
      </ModalOverlay>
    </Container>
  );
}

export default Stay;
