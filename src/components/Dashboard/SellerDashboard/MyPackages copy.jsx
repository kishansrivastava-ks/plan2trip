import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiEdit, FiFile } from "react-icons/fi";

const Container = styled.div`
  /* padding: 20px; */
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  padding-top: 0;
  border-bottom: 1px solid #ddd;
  /* margin-bottom: 1rem; */
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
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-height: 500px;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: #2a93d5 transparent;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2a93d5;
    border-radius: 6px;
  }
  padding-right: 4rem;
`;

const GridItem = styled.div`
  display: grid;
  grid-template-rows: 5fr 1fr 1fr;
  gap: 8px;
  /* background-color: #f7f7f7; */
  border-radius: 8px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  overflow: hidden;
  /* box-shadow: 2px 2px 4px 0px #00000040; */
`;

const ImageContainer = styled.div`
  background-image: url("/package-bg.jpeg");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 10px;
  color: white;
  font-weight: bold;
  height: 100%;
  box-shadow: 0px 4px 4px 0px #00000040 inset;

  box-shadow: 0px 4px 4px 0px #00000040;

  backdrop-filter: blur(15px);
  border-radius: 8px;
`;

const PackageDetails = styled.div`
  /* text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6); */
  letter-spacing: 1.5px;

  & > h3 {
    margin: 0;
    font-size: 3rem;
    font-weight: bold;
  }

  & > p {
    /* margin: 5px 0; */
    font-size: 1.8rem;
    font-weight: 400;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  /* padding: 0 10px; */
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

function MyPackages() {
  return (
    <Container>
      <Header>
        <Title>My Packages</Title>
        <AddPackageButton to="/add-package">
          <span>+</span> Add Package
        </AddPackageButton>
      </Header>
      <GridContainer>
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
              <ActionButton>
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
    </Container>
  );
}

export default MyPackages;
