import { useState } from "react";
import styled from "styled-components";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
  min-width: 75vw;
  min-height: max-content;
  /* height: 70vh; */
  padding: 4rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  /* border: 2px solid red; */
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
`;

const PhotoLeftCol = styled.div`
  min-width: 75%;
  background: ${(props) =>
    props.$hasPhotos ? `url("${props.$mainPhoto}")` : "none"};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30rem;
  color: #666;
  font-size: 1.5rem;
  border: 2px solid #ccc;
`;
const PhotoRightCol = styled.div`
  flex: 3;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
`;

const PhotoGrid = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));

  gap: 0.5rem;
  height: 30rem;
  overflow-y: auto;
  border-radius: 5px;
  position: relative;
  min-height: 120px;
  /* border: 2px solid red; */
`;

const EmptyPhotoGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 1.5rem;
`;

const PhotoWrapper = styled.div`
  aspect-ratio: 4 / 3;
  border: ${(props) =>
    props.$selected ? "3px solid #2a93d5" : "3px solid transparent"};
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  /* border: 2px solid red; */
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  & > button {
    flex: 1;
    padding: 0.5rem 0.5rem;
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    background-color: #2a93d5;
    opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
    pointer-events: ${(props) => (props.$disabled ? "none" : "auto")};

    &:hover {
      cursor: pointer;
    }
  }
`;

function Overview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [packageName, setPackageName] = useState(
    "Best Tea Plantation of South India - Coorg (3N-2D) Package"
  );
  const [price, setPrice] = useState("250");
  // const [photos, setPhotos] = useState(["/package-bg.jpeg"]);

  const [photos, setPhotos] = useState(["/package-bg.jpeg"]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleAddPhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newPhoto = URL.createObjectURL(file);
      setPhotos([...photos, newPhoto]);
    }
  };

  const handleRemovePhoto = () => {
    if (selectedPhoto !== null) {
      setPhotos(photos.filter((_, i) => i !== selectedPhoto));
      setSelectedPhoto(null);
    }
  };

  const handlePhotoClick = (index) => {
    setSelectedPhoto(selectedPhoto === index ? null : index);
  };

  // const reorderPhotos = (list, startIndex, endIndex) => {
  //   const result = Array.from(list);
  //   const [removed] = result.splice(startIndex, 1);
  //   result.splice(endIndex, 0, removed);
  //   return result;
  // };
  // const onDragEnd = (result) => {
  //   if (!result.destination) return;

  //   const reorderedPhotos = reorderPhotos(
  //     photos,
  //     result.source.index,
  //     result.destination.index
  //   );
  //   setPhotos(reorderedPhotos);
  // };

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
            <PhotoLeftCol
              $hasPhotos={photos.length > 0}
              $mainPhoto={photos[0] || ""}
            >
              {photos.length === 0 && "No photos added yet"}
            </PhotoLeftCol>
            <PhotoRightCol>
              <PhotoGrid>
                {photos.length === 0 && (
                  <EmptyPhotoGrid>Add photos</EmptyPhotoGrid>
                )}
                {photos.map((photo, index) => (
                  <PhotoWrapper
                    key={index}
                    $selected={selectedPhoto === index}
                    onClick={() => handlePhotoClick(index)}
                  >
                    <Photo src={photo} alt={`Gallery item ${index + 1}`} />
                  </PhotoWrapper>
                ))}
              </PhotoGrid>

              <Actions $disabled={photos.length === 0 && !selectedPhoto}>
                <button>
                  <label htmlFor="photo-upload">Add Photo</label>
                </button>
                <button
                  onClick={handleRemovePhoto}
                  disabled={selectedPhoto === null}
                >
                  Remove Photo
                </button>
              </Actions>
              <input
                type="file"
                id="photo-upload"
                accept="image/*"
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
