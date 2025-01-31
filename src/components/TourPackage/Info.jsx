import React from "react";
import styled, { keyframes } from "styled-components";
import { FaCircle } from "react-icons/fa";

const MOBILE_BREAKPOINT = "768px";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(1.02);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const InfoContainer = styled.div`
  width: 90vw;
  height: max-content;
  margin: 0 auto;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 95vw;
    padding-top: 0;
  }
`;
const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #333;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 90vw;
  height: 78vh;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 95vw;
    height: 50vh;
    border-radius: 8px;
  }
`;

const CarouselTrack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform 0.6s cubic-bezier(0.45, 0, 0.55, 1);
`;

const Slide = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  animation: ${fadeIn} 0.6s ease-out;
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  backdrop-filter: blur(4px);

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    bottom: 10px;
    gap: 8px;
    padding: 6px 12px;
  }
`;

const Dot = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  svg {
    width: ${(props) => (props.isActive ? "12px" : "8px")};
    height: ${(props) => (props.isActive ? "12px" : "8px")};
    color: ${(props) =>
      props.isActive ? "#ffffff" : "rgba(255, 255, 255, 0.6)"};
    transition: all 0.3s ease;
  }
`;

const PackageDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding: 0 2rem;
  gap: 10rem;
  margin: 3rem 0;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    gap: 2rem;
    padding: 0 1rem;
    margin: 2rem 0;
  }
`;

const DetailItem = styled.div`
  flex: 1;
  text-align: center;
`;

const DetailHeading = styled.h4`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #000;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 1.8rem;
    margin-bottom: 0.3rem;
  }
`;

const DetailInfo = styled.div`
  background-color: #159fd3;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 2.2rem;
  letter-spacing: 1px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 1.6rem;
    padding: 0.5rem 0.75rem;
  }
`;

const Info = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const images = [
    "/manali-1.jpg",
    "/manali-2.jpg",
    "/manali-3.jpg",
    "/manali-4.jpg",
    "/manali-1.jpg",
  ];

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 600); // Match transition duration
  };

  const nextSlide = () => {
    goToSlide((activeIndex + 1) % images.length);
  };

  React.useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <InfoContainer>
      <Heading>MANALI TOUR PACKAGE (5-N;4-D)</Heading>

      <CarouselContainer>
        <CarouselTrack
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <Slide key={index}>
              <SlideImage src={src} alt={`Manali Tour ${index + 1}`} />
            </Slide>
          ))}
        </CarouselTrack>

        <DotsContainer>
          {images.map((_, index) => (
            <Dot
              key={index}
              isActive={index === activeIndex}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <FaCircle />
            </Dot>
          ))}
        </DotsContainer>
      </CarouselContainer>

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
