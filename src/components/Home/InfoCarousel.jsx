import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import SearchBox from "./SearchBox";

const CarouselSection = styled.section`
  margin-top: 8vh;
  height: 92vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media (max-width: 768px) {
    margin-top: 0;
    height: 100dvh;
  }
`;

const SlideContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  transition: transform 1s ease;
  transform: ${(props) => `translateX(-${props.activeIndex * 100}%)`};
`;

const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  color: white;
`;

const InfoText = styled.h2`
  position: absolute;
  top: 15%;
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bold;
  text-align: center;
  text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);
  font-family: "Integral CF Bold", sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
    top: 25%;
    padding: 0 20px;
    letter-spacing: 2px;
  }
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: 20%;
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    bottom: 15%;
    display: none;
  }
`;

const SearchContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    bottom: 40%;
    transform: translateY(50%);
    padding: 0 20px;
  }
`;

const Dot = styled.div`
  width: ${(props) => (props.isActive ? "16px" : "10px")};
  height: ${(props) => (props.isActive ? "16px" : "10px")};
  background-color: ${(props) => (props.isActive ? "blue" : "black")};
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease, width 0.3s ease, height 0.3s ease;
`;

const slides = [
  {
    id: 1,
    text: "Your Perfect Trip, Just A Click Away",
    image: "/info-mountain.jpeg",
  },
  { id: 2, text: "Adventure awaits", image: "/goa.jpeg" },
  { id: 3, text: "Feel the nature", image: "/mountain.jpeg" },
  { id: 4, text: "Breathtaking views", image: "/info-mountain.jpeg" },
  { id: 5, text: "Explore the unknown", image: "/goa.jpeg" },
];

function InfoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideInterval = useRef(null);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval.current);
  }, []);

  const handleDotClick = (index) => {
    clearInterval(slideInterval.current);
    goToSlide(index);
    slideInterval.current = setInterval(nextSlide, 5000);
  };

  return (
    <CarouselSection id="pageTop">
      <SlideContainer activeIndex={activeIndex}>
        {slides.map((slide) => (
          <Slide
            key={slide.id}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <InfoText>{slide.text}</InfoText>
          </Slide>
        ))}
      </SlideContainer>
      <DotContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            isActive={index === activeIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotContainer>

      <SearchContainer>
        <SearchBox />
      </SearchContainer>
    </CarouselSection>
  );
}

export default InfoCarousel;
