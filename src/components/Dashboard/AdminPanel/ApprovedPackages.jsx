/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { FiFile, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
`;
const BackButton = styled.button`
  border: none;
  background: transparent;
  padding: 10px;
  font-size: 1.6rem;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Packages = styled.div`
  margin-top: 1rem;
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

const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const RemovePackageButton = styled.button`
  flex: 1;
  background-color: #2a93d5;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px 15px;
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

const PropertiesButton = styled.button`
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

function ApprovedPackages() {
  const packages = Array.from({ length: 16 }, (_, index) => ({
    id: index,
    name: `Package ${index + 1}`,
    price: `$${250 + index * 10}`,
    rating: `${(4.0 + index * 0.1).toFixed(1)}/5`,
  }));

  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <h2>Approved Packages</h2>
        <BackButton onClick={() => navigate(-1)}>
          Back <ArrowRight size={24} strokeWidth={2} color="#2a93d5" />
        </BackButton>
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
            <ActionButtonsContainer>
              <RemovePackageButton>
                <span>
                  <FiTrash2 />
                </span>{" "}
                Remove Package
              </RemovePackageButton>
              <PropertiesButton>
                <span>
                  <FiFile />
                </span>{" "}
                Properties
              </PropertiesButton>
            </ActionButtonsContainer>
          </GridItem>
        ))}
      </Packages>
    </Container>
  );
}

export default ApprovedPackages;
