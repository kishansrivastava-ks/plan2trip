/* eslint-disable no-unused-vars */
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

  @media (max-width: 768px) {
    flex: 1;
    padding: 0 15px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  padding-top: 0;
  border-bottom: 1px solid #ddd;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: black;
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
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
  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding: 8px 20px;
    width: 100%;
    justify-content: center;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.showDetails ? "repeat(2, 1fr)" : "repeat(3, 1fr)"};
  gap: 20px;
  padding-right: 1rem;
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
    background-color: #333333;
    border-radius: 16px;
    border: 4px solid transparent;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-right: 0;
    max-height: none;
    gap: 5px;
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
  @media (max-width: 768px) {
    & > h3 {
      font-size: 2.4rem;
    }
    & > p {
      font-size: 1.6rem;
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
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
  text-decoration: none; /* Ensures link appears like a button */

  &:hover {
    background-color: #237ab8;
  }
  @media (max-width: 768px) {
    min-height: 50%;
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
  @media (max-width: 768px) {
    max-height: 4.5rem;
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
  padding: 15px;
  transform: ${(props) =>
    props.showDetails ? "translateX(0)" : "translateX(100%)"};
  transition: transform 1s ease-in-out;
  z-index: 10;
  display: ${(props) => (props.showDetails ? "block" : "none")};
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    position: fixed;
  }
`;

const DetailsHeader = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
  line-height: 1.1;
`;

const PriceInfo = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: #333333;
  margin-bottom: 5px;
`;

const Image = styled.div`
  background-image: url("/package-bg.jpeg");
  background-size: cover;
  background-position: center;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ListSection = styled.div`
  margin-bottom: 10px;
`;

const ListHeading = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  color: #333333;
  letter-spacing: 1px;
  /* margin-bottom: 10px; */
`;

const ListItem = styled.ul`
  /* list-style-type: circle; */
  list-style-type: disc;
  margin: 0;
  padding-left: 6rem;
  font-size: 1.5rem;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    padding-left: 3rem;
  }
`;

const ExitButton = styled.button`
  position: absolute;
  bottom: 5px;
  right: 20px;
  background-color: #333333;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 4rem;
  font-size: 1.6rem;
  cursor: pointer;

  &:hover {
    background-color: #555555;
  }
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
          <AddPackageButton to="/seller-dashboard/packages/add-package">
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
                <ActionButton
                  as={Link}
                  to="/seller-dashboard/packages/modify-package"
                >
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
        <DetailsHeader>
          Best Tea Plantation of South India - Coorg (3N-2D) Package
        </DetailsHeader>
        <PriceInfo>Price: $250 Per person</PriceInfo>
        <Image />
        <ListSection>
          <ListHeading>Highlighted Spots:</ListHeading>
          <ListItem>
            <li>Abbey Waterfalls</li>
            <li>Omkareshwara Temple</li>
            <li>Mallalli Waterfalls</li>
            <li>Nagaraholl Tiger Reserve</li>
            <li>Dubare Elephant Camp</li>
          </ListItem>
        </ListSection>
        <ListSection>
          <ListHeading>Stays:</ListHeading>
          <ListItem>
            <li>Taj Hotel</li>
            <li>Oberoi Mension</li>
          </ListItem>
        </ListSection>
        <ExitButton onClick={closeDetails}>Exit</ExitButton>
      </DetailsPanel>
    </Container>
  );
}

export default MyPackages;
