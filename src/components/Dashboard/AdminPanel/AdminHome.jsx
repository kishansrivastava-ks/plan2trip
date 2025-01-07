import styled from "styled-components";
// import { Link } from "react-router-dom";
import { FiFile, FiX } from "react-icons/fi";
import { useState } from "react";

const HomeContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Section = styled.section`
  width: 100%;
`;

const SectionHeader = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #333;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #ddd;
  margin-bottom: 2rem;
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
  padding: 1rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const GridItem = styled.div`
  display: grid;
  grid-template-rows: 5fr 1fr;
  gap: 4px;
  border-radius: 8px;
  overflow: hidden;
  min-width: 350px;
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
  height: 280px;
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
    background-color: ${(props) => (props.isRemove ? "#d93838" : "#237ab8")};
  }
`;

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

const MainContent = styled.div`
  flex: ${(props) => (props.showSlider ? "0 0 75%" : "1")};
  transition: flex 0.3s ease;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 25%;
  background: white;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  border-left: 1px solid #ddd;
  padding: 2rem;
  overflow-y: auto;
`;

const SellerList = styled.ol`
  list-style-position: outside;
  padding-left: 2.5rem;
`;

const SellerItem = styled.li`
  margin-bottom: 1.5rem;
`;

const SellerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const SellerImage = styled.div`
  width: 50px;
  height: 50px;
  background: #ddd;
  border-radius: 5px;
`;

function AdminHome() {
  const dummyData = Array(10).fill({
    title: "Coorg - (3N - 2D)",
    price: "$250",
    rating: "4.5/5",
    seller: "Travel Adventures Ltd",
  });

  const [showSlider, setShowSlider] = useState(false);

  return (
    <Container>
      <MainContent showSlider={showSlider}>
        <HomeContainer>
          <Section>
            <SectionHeader>Top Sellings</SectionHeader>
            <Divider />
            <ScrollContainer>
              {dummyData.map((item, index) => (
                <GridItem key={index}>
                  <ImageContainer>
                    <PackageDetails>
                      <h3>{item.title}</h3>
                      <p>Price: {item.price}</p>
                      <p>⭐ {item.rating}</p>
                      <p>Seller: {item.seller}</p>
                    </PackageDetails>
                  </ImageContainer>
                  <ButtonsContainer>
                    <ActionButton isRemove>
                      <span>🗑</span> Remove Package
                    </ActionButton>
                    <ActionButton onClick={() => setShowSlider(true)}>
                      <span>
                        <FiFile />
                      </span>{" "}
                      Properties
                    </ActionButton>
                  </ButtonsContainer>
                </GridItem>
              ))}
            </ScrollContainer>
          </Section>

          <Section>
            <SectionHeader>Revenues</SectionHeader>
            <Divider />
          </Section>
        </HomeContainer>
      </MainContent>

      <Slider show={showSlider}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <SectionHeader style={{ margin: 0 }}>Top 10 Sellers</SectionHeader>
          <FiX
            style={{ cursor: "pointer", fontSize: "2.4rem" }}
            onClick={() => setShowSlider(false)}
          />
        </div>
        <Divider />
        <SellerList>
          {Array(10)
            .fill()
            .map((_, index) => (
              <SellerItem key={index}>
                <SellerBox>
                  <SellerImage />
                  <span style={{ fontSize: "1.6rem" }}>
                    Seller Name {index + 1}
                  </span>
                </SellerBox>
              </SellerItem>
            ))}
        </SellerList>
      </Slider>
    </Container>
  );
}

export default AdminHome;
