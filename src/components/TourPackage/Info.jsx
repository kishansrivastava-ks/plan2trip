import React from "react";
import styled, { keyframes } from "styled-components";

import { FaCircle } from "react-icons/fa";

// Keyframes for sliding animation (reuse from previous work)
const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Styled Components
const InfoContainer = styled.div`
  padding: 2rem;
  max-width: 80vw;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: #333;
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px;
  margin-bottom: 2rem;
`;

const CarouselSlide = styled.div`
  display: flex;
  transition: transform 0.8s ease;
  animation: ${slideIn} 1s ease;
`;

const Slide = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Dot = styled(FaCircle)`
  margin: 0 5px;
  color: ${(props) => (props.isActive ? "#0000FF" : "#000")};
  font-size: ${(props) => (props.isActive ? "0.8rem" : "0.6rem")};
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
`;

const PackageDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const DetailItem = styled.div`
  flex: 1;
  text-align: center;
`;

const DetailHeading = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
`;

const DetailInfo = styled.div`
  background-color: #0000ff;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
`;

// Info Component
const Info = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const images = [
    "/manali-1.jpg",
    "/manali-2.jpg",
    "/manali-3.jpg",
    "/manali-4.jpg",
    "/manali-4.jpg",
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <InfoContainer>
      <Heading>MANALI TOUR PACKAGE (5-N;4-D)</Heading>

      {/* Carousel */}
      <CarouselContainer>
        <CarouselSlide
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <Slide key={index} src={src} alt={`Slide ${index + 1}`} />
          ))}
        </CarouselSlide>

        {/* Dots */}
        <DotsContainer>
          {images.map((_, index) => (
            <Dot key={index} isActive={index === activeIndex} />
          ))}
        </DotsContainer>
      </CarouselContainer>

      {/* Package Details */}
      <PackageDetailsContainer>
        <DetailItem>
          <DetailHeading>Tour Operator</DetailHeading>
          <DetailInfo>Operator Name</DetailInfo>
        </DetailItem>
        <DetailItem>
          <DetailHeading>Group Size</DetailHeading>
          <DetailInfo>10-15 People</DetailInfo>
        </DetailItem>
        <DetailItem>
          <DetailHeading>Price</DetailHeading>
          <DetailInfo>$500</DetailInfo>
        </DetailItem>
      </PackageDetailsContainer>
    </InfoContainer>
  );
};

export default Info;
