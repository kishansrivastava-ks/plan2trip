/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiEdit, FiFile } from "react-icons/fi";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 2px solid #cccccc;

  & > h2 {
    text-shadow: 0px 4px 4px 0px #00000040;
  }

  & > div {
    & > button {
      box-shadow: -2px -2px 4px 0px #00000040, 2px 2px 4px 0px #00000040;
      margin-left: 1rem;
      padding: 0.5rem 2rem;
      border-radius: 5px;
      border: none;
      background: #ffffff;
      font-size: 1.7rem;
      color: #8b8b8b;
      cursor: pointer;

      &:hover {
        background: #f0f0f0;
      }
    }
  }
`;

const Packages = styled.div`
  margin-top: 1rem;
  /* border: 1px solid green; */
  width: 100%;
  padding: 1rem;
  max-height: 80vh;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  padding-bottom: 3rem;

  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const GridItem = styled.div`
  display: grid;
  /* grid-template-rows: 5fr  1fr 1fr; */
  grid-template-rows: auto;
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
  height: 20rem;
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

const PropertiesButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2a93d5;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.8rem;
  padding: 1.5rem 0;
  cursor: pointer;
  gap: 10px;

  &:hover {
    background-color: #237ab8;
  }
`;

const ActionButtonsContainer = styled.button`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  border: none;
  background-color: #fff;
`;

const RemovePackageButton = styled.button`
  flex: 1;
  background-color: #2a93d5;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    background-color: #d93838;
  }
`;

const ApprovePackageButton = styled.button`
  flex: 1;
  background-color: #2a93d5;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    background-color: #237ab8;
  }
`;

function Requests() {
  const packages = Array.from({ length: 16 }, (_, index) => ({
    id: index,
    name: `Package ${index + 1}`,
    price: `$${250 + index * 10}`,
    rating: `${(4.0 + index * 0.1).toFixed(1)}/5`,
  }));

  const handlePropertiesClick = (packageDetails) => {
    console.log("Package properties clicked:", packageDetails);
  };

  return (
    <Container>
      <Header>
        <h2>Requests</h2>
        <div>
          <button>Rejected Packages</button>
          <button>Approved Packages</button>
        </div>
      </Header>
      <Packages>
        {packages.map((pkg, index) => (
          <GridItem key={pkg.id}>
            <ImageContainer>
              <PackageDetails>
                <h3>{pkg.name}</h3>
                <p>Price: {pkg.price}</p>
                <p>⭐ {pkg.rating}</p>
              </PackageDetails>
            </ImageContainer>
            <PropertiesButton>
              <span>
                <FiFile />
              </span>{" "}
              Properties
            </PropertiesButton>
            <ActionButtonsContainer>
              <RemovePackageButton>
                <span>🗑</span> Remove Package
              </RemovePackageButton>
              <ApprovePackageButton>
                <span>✔</span> Approve Package
              </ApprovePackageButton>
            </ActionButtonsContainer>
          </GridItem>
        ))}
      </Packages>
    </Container>
  );
}

export default Requests;
