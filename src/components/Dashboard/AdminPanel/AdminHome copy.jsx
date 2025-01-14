import { useState } from "react";
import styled from "styled-components";
import { FiFile } from "react-icons/fi";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 80vh;
  transition: width 0.3s ease;
  ${(props) => (props.isPanelOpen ? "width: 70%;" : "width: 100%;")}
`;

const TopSelling = styled.div`
  flex-basis: 50%;
  width: 100%;
`;

const Revenues = styled.div`
  flex-basis: 50%;
  width: 100%;
`;

const Header = styled.div`
  font-weight: bold;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  font-size: 2.5rem;
  border-bottom: 2px solid #8b8b8b;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
`;

const Packages = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem;
  scrollbar-width: thin;
  scrollbar-color: gray transparent;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const SlidingPanel = styled.div`
  position: fixed;
  top: 12%;
  right: 0;
  width: 30%;
  height: 85%;
  background-color: #fff;
  /* box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1); */
  border-left: 2px solid #8b8b8b;
  /* transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"}; */
  transition: transform 0.3s ease;
  z-index: 100;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* border: 2px solid red; */
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;

const GridItem = styled.div`
  display: grid;
  grid-template-rows: 5fr 1fr 1fr;
  gap: 8px;
  border-radius: 8px;
  overflow: hidden;
  /* background: #fff; */
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  min-width: 300px;
  /* border: 2px solid red; */
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
  /* box-shadow: 0px 4px 4px 0px #00000040 inset; */
  border-radius: 8px;
`;

const PackageDetails = styled.div`
  letter-spacing: 1.5px;

  & > h3 {
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
  }

  & > p {
    font-size: 2rem;
    font-weight: 400;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  background: transparent;
  /* border: 2px solid red; */
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
  padding: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  gap: 10px;
  text-decoration: none;

  &:hover {
    background-color: #237ab8;
  }
`;

const SidePanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #8b8b8b;
  padding-bottom: 0.5rem;

  & > h2 {
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  }
`;

const SellerList = styled.div`
  margin-top: 1rem;
  overflow-y: auto;
  height: calc(100% - 60px); /* Adjust height based on header */
  /* padding: 1rem; */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SellerItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0rem 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  box-shadow: 2px 2px 4px 0px #00000040;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const SellerNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-right: 1rem;
`;

const SellerImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin-right: 1rem;
`;

const SellerName = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

function AdminHome() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handlePropertiesClick = () => {
    setIsPanelOpen(true);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
  };

  const dummyPackages = Array(10).fill({
    name: "Coorg - (3N - 2D)",
    price: "$250",
    rating: "⭐ 4.5/5",
  });

  const sellers = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Seller ${index + 1}`,
    image: "/seller-img.png",
    details: `Details about Seller ${index + 1}`,
  }));

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Container isPanelOpen={isPanelOpen}>
        <TopSelling>
          <Header>TOP SELLINGS</Header>
          <Packages>
            {dummyPackages.map((pkg, index) => (
              <GridItem key={index}>
                <ImageContainer>
                  <PackageDetails>
                    <h3>{pkg.name}</h3>
                    <p>Price: {pkg.price}</p>
                    <p>{pkg.rating}</p>
                  </PackageDetails>
                </ImageContainer>
                <ButtonsContainer>
                  <ActionButton
                    as={Link}
                    to="/seller-dashboard/packages/modify-package"
                  >
                    <span>🗑</span>
                    Remove Package
                  </ActionButton>
                  <ActionButton onClick={handlePropertiesClick}>
                    <span>
                      <FiFile />
                    </span>
                    Properties
                  </ActionButton>
                </ButtonsContainer>
              </GridItem>
            ))}
          </Packages>
        </TopSelling>
        <Revenues>
          <Header>REVENUES</Header>
        </Revenues>
      </Container>
      <SlidingPanel isOpen={isPanelOpen}>
        <SidePanelHeader>
          <h2>TOP SELLING</h2>
          <CloseButton onClick={closePanel}>✖</CloseButton>
        </SidePanelHeader>
        <SellerList>
          {sellers.map((seller) => (
            <SellerItem
              key={seller.id}
              // onClick={() => setSelectedSeller(seller)}
            >
              <SellerNumber>{seller.id}</SellerNumber>
              <SellerImage src={seller.image} alt={seller.name} />
              <SellerName>{seller.name}</SellerName>
            </SellerItem>
          ))}
        </SellerList>
      </SlidingPanel>
    </div>
  );
}

export default AdminHome;
