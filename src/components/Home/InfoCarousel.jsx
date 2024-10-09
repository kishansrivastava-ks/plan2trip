import { useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const InfoCarouselContainer = styled.div`
  width: 85vw;
  height: 50vh;
  background: url("/bg-info.jpg") no-repeat center center/cover;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  margin: 0 auto;
  position: relative;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const Heading = styled.h1`
  font-size: 4rem;
  color: #fff;
  margin: 0;
`;

const Subheading = styled.p`
  font-size: 2rem;
  color: #e0e0e0;
  margin: 5px 0 20px 0;
`;

const CarouselContainer = styled.div`
  width: 78vw;
  margin: -40px auto 0;
  padding: 15px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  background: transparent;
  border-radius: 15px;
`;

const CardList = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: ${({ translateValue }) => `translateX(${translateValue}px)`};
`;

const Card = styled.div`
  width: 215px;
  margin: 0 10px;
  background-color: #fff;
  border-radius: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border: 0.5rem solid #fff;
  cursor: pointer;
  color: #000;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardTitle = styled.div`
  padding: 10px;
  /* color: #fff; */
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

const NavButton = styled.div`
  position: absolute;
  top: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const LeftNavButton = styled(NavButton)`
  left: 10px;
  background-color: #fff;
  color: #000;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
`;

const RightNavButton = styled(NavButton)`
  right: 10px;
  background-color: #fff;
  color: #000;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
`;

const DotIndicator = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  display: flex;
  gap: 5px;
  margin-top: -1rem;
  margin-bottom: 1rem;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? "#fff" : "#ccc")};
`;

const InfoCarousel = () => {
  const [translateValue, setTranslateValue] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = Array(10).fill({
    imageUrl: "/place.jpg",
    placeName: "Location Name",
  });

  const handleRightClick = () => {
    if (activeIndex < Math.floor(cards.length / 5) - 1) {
      setTranslateValue(translateValue - 210 * 5);
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleLeftClick = () => {
    if (activeIndex > 0) {
      setTranslateValue(translateValue + 210 * 5);
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div style={{ margin: "5rem" }}>
      <InfoCarouselContainer>
        <Heading>Book the Best Tours & Travel Packages</Heading>
        <Subheading>Choose from thousands of Organized Adventures</Subheading>
      </InfoCarouselContainer>
      <CarouselContainer>
        <LeftNavButton onClick={handleLeftClick}>
          <FaChevronLeft />
        </LeftNavButton>
        <CardList translateValue={translateValue}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage src={card.imageUrl} alt={card.placeName} />
              <CardTitle>{card.placeName}</CardTitle>
            </Card>
          ))}
        </CardList>
        <RightNavButton onClick={handleRightClick}>
          <FaChevronRight />
        </RightNavButton>
        <DotIndicator>
          <Dot isActive={activeIndex === 0} />
          <Dot isActive={activeIndex === 1} />
        </DotIndicator>
      </CarouselContainer>
    </div>
  );
};

export default InfoCarousel;
