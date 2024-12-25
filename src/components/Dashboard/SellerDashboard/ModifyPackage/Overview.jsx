import { useState } from "react";
import styled from "styled-components";

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 53rem;
  box-shadow: 2px 2px 6px 0px #00000040, -2px -2px 4px 0px #00000040;
  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 12px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
  letter-spacing: 1px;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: black;
  margin-bottom: 5px;
  letter-spacing: 1px;
`;

const ContentContainer = styled.div`
  flex: 1;
  position: relative;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const EditButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #2a93d5;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 5rem;
  font-size: 2rem;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    background-color: #237ab8;
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
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  max-width: 75vw;
  min-height: max-content;
  /* height: 70vh; */
  padding: 4rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -0.4rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 4rem;
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  /* border: 2px solid red; */

  & > label {
    flex: 1;
    font-size: 1.5rem;
    font-weight: bold;
  }

  & > input {
    flex: 5;
    padding: 0.5rem;
    font-size: 1.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  &:nth-child(3) {
    /* border: 2px solid red; */
    & > label {
      flex: 0;
      min-width: max-content;
      margin-right: 9rem;
    }
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
  /* border: 1px solid red; */
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;

  & > input {
    accent-color: black;
  }
`;

const PhotosContainer = styled.div`
  display: flex;
  gap: 1rem;
  /* border: 2px solid red; */
`;

const PhotoLeftCol = styled.div`
  min-width: 75%;
  background: url("/package-bg.jpeg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* border: 2px solid blue; */
  border-radius: 10px;
`;
const PhotoRightCol = styled.div`
  flex: 3;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  height: 30rem;
  overflow-y: auto;
  border-radius: 5px;
  /* border: 1px solid red; */
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  cursor: pointer;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  /* justify-content: center; */
  margin-top: 1rem;
  /* border: 1px solid green; */

  & > button {
    flex: 1;
    padding: 0.5rem 0.5rem;
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    background-color: #2a93d5;
  }
  /* 
  & > button:first-child {
    background-color: #2a93d5;
    color: white;
  }

  & > button:last-child {
    background-color: #333;
    color: white;
  } */
`;

function Overview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [packageName, setPackageName] = useState(
    "Best Tea Plantation of South India - Coorg (3N-2D) Package"
  );
  const [price, setPrice] = useState("250");
  const [photos, setPhotos] = useState(["/package-bg.jpeg"]);

  const handleAddPhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newPhoto = URL.createObjectURL(file);
      setPhotos([...photos, newPhoto]);
    }
  };

  const handleRemovePhoto = (index) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  return (
    <OverviewContainer>
      <Title>{packageName}</Title>
      <Subtitle>Price : ${price} Per person</Subtitle>
      <ContentContainer>
        <Image src={photos[0]} alt="Coorg Package" />
        <EditButton onClick={() => setIsModalOpen(true)}>Edit</EditButton>
      </ContentContainer>

      <ModalOverlay
        isVisible={isModalOpen}
        onClick={() => setIsModalOpen(false)}
      >
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
          <Row>
            <label>Name of Package:</label>
            <input
              type="text"
              value={packageName}
              onChange={(e) => setPackageName(e.target.value)}
            />
          </Row>
          <Row>
            <label>Price Matrix:</label>
            <RadioGroup>
              <RadioOption>
                <input type="radio" name="price-matrix" /> Variable Price
              </RadioOption>
              <RadioOption>
                <input type="radio" name="price-matrix" /> Fixed Price
              </RadioOption>
            </RadioGroup>
          </Row>
          <Row>
            <label>Price (Per Person):</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Row>
          <PhotosContainer>
            <PhotoLeftCol>left columnm</PhotoLeftCol>
            <PhotoRightCol>
              <PhotoGrid>
                {photos.map((photo, index) => (
                  <Photo
                    key={index}
                    src={photo}
                    alt="Gallery"
                    onClick={() => handleRemovePhoto(index)}
                  />
                ))}
              </PhotoGrid>
              <Actions>
                <button>
                  <label htmlFor="photo-upload">Add Photo</label>
                </button>
                <button onClick={() => setPhotos([])}>Remove Photo</button>
              </Actions>
              <input
                type="file"
                id="photo-upload"
                style={{ display: "none" }}
                onChange={handleAddPhoto}
              />
            </PhotoRightCol>
          </PhotosContainer>
        </ModalContainer>
      </ModalOverlay>
    </OverviewContainer>
  );
}

export default Overview;
