import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiEdit, FiFile, FiX } from "react-icons/fi";

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  overflow-x: hidden;
`;

const MainContent = styled.div`
  flex: ${(props) => (props.showDetails ? "0 0 66%" : "1")};
  transition: flex 0.5s ease;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: black;
`;

const AddPackageButton = styled(Link)`
  display: flex;
  align-items: center;
  background-color: #2a93d5;
  color: white;
  padding: 10px 30px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.8rem;
  gap: 10px;

  &:hover {
    background-color: #237ab8;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.showDetails ? "repeat(2, 1fr)" : "repeat(3, 1fr)"};
  gap: 20px;
  max-height: 500px;
  overflow-y: auto;
  transition: grid-template-columns 0.5s ease;

  scrollbar-width: thin;
  scrollbar-color: #2a93d5 transparent;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2a93d5;
    border-radius: 6px;
  }
`;

const GridItem = styled.div`
  display: grid;
  grid-template-rows: 5fr 1fr 1fr;
  gap: 8px;
  border-radius: 8px;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  background-image: url("/package-bg.jpeg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: 10px;
  color: white;
  font-weight: bold;
  height: 100%;
  box-shadow: 0px 4px 4px 0px #00000040 inset;
  border-radius: 8px;
`;

const PackageDetails = styled.div`
  letter-spacing: 1.5px;

  & > h3 {
    margin: 0;
    font-size: 3rem;
    font-weight: bold;
  }

  & > p {
    font-size: 1.8rem;
    font-weight: 400;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const ActionButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2a93d5;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 1.6rem;
  cursor: pointer;
  gap: 10px;

  &:hover {
    background-color: #237ab8;
  }
`;

const RemoveButton = styled.button`
  background-color: #2a93d5;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.6rem;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: #d93838;
  }
`;

const DetailsPanel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 33%;
  background-color: #f9f9f9;
  box-shadow: -2px 0px 4px 0px #00000040;
  border-left: 1px solid #ddd;
  padding: 20px;
  transform: ${(props) =>
    props.showDetails ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.5s ease;
  z-index: 10;
  display: ${(props) => (props.showDetails ? "block" : "none")};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;

  &:hover {
    color: #ff0000;
  }
`;

const DetailsTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

function MyPackages() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePropertiesClick = (packageDetails) => {
    setSelectedPackage(packageDetails);
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
    setSelectedPackage(null);
  };

  return (
    <Container>
      <MainContent showDetails={showDetails}>
        <Header>
          <Title>My Packages</Title>
          <AddPackageButton to="/add-package">
            <span>+</span> Add Package
          </AddPackageButton>
        </Header>
        <GridContainer showDetails={showDetails}>
          {[...Array(6)].map((_, index) => (
            <GridItem key={index}>
              <ImageContainer>
                <PackageDetails>
                  <h3>Coorg - (3N - 2D)</h3>
                  <p>Price: $250</p>
                  <p>⭐ 4.5/5</p>
                </PackageDetails>
              </ImageContainer>
              <ButtonsContainer>
                <ActionButton>
                  <span>
                    <FiEdit />
                  </span>{" "}
                  Modify Package
                </ActionButton>
                <ActionButton
                  onClick={() =>
                    handlePropertiesClick({
                      name: "Coorg - (3N - 2D)",
                      price: "$250",
                      rating: "4.5/5",
                    })
                  }
                >
                  <span>
                    <FiFile />
                  </span>{" "}
                  Properties
                </ActionButton>
              </ButtonsContainer>
              <RemoveButton>
                <span>🗑</span> Remove Package
              </RemoveButton>
            </GridItem>
          ))}
        </GridContainer>
      </MainContent>
      <DetailsPanel showDetails={showDetails}>
        <CloseButton onClick={closeDetails}>
          <FiX />
        </CloseButton>
        <DetailsTitle>Package Details</DetailsTitle>
        {selectedPackage && (
          <div>
            <p>Name: {selectedPackage.name}</p>
            <p>Price: {selectedPackage.price}</p>
            <p>Rating: {selectedPackage.rating}</p>
          </div>
        )}
      </DetailsPanel>
    </Container>
  );
}

export default MyPackages;
