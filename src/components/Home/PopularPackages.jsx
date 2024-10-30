/* eslint-disable no-unused-vars */
import { useRef } from "react";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Section = styled.section`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;
`;

const Heading = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 3rem;
  margin-top: 3rem;
  letter-spacing: 3px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const SliderContainer = styled.div`
  /* border: 0.5rem solid green; */
  position: relative;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 74vw;
  overflow: hidden;

  padding: 1rem;
  overflow-x: scroll;
  padding-bottom: 3rem;

  &::-webkit-scrollbar {
    height: 15px;
    border: none;
    width: 30%;
    margin: 0 auto;
    @media (max-width: 768px) {
      display: none;
    }
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 10px;
    border: 4px solid black;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #100;
  }
`;

const Slider = styled.div`
  display: flex;
  gap: 1rem;
  transition: transform 0.5s ease;
`;

const Card = styled.div`
  /* border: 2px solid red; */
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  /* border-radius: 38px; */
  /* padding: 16px; */
  /* box-shadow: var(--shadow-sm); */
  margin: 0 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 90%;
  height: 280px;
  border-radius: 38px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const PlaceName = styled.h3`
  font-weight: bold;
  color: var(--color-grey-800);
  margin: 12px 0 2px;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 1px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Price = styled.p`
  font-weight: 500;
  /* color: var(--color-blue-700); */
  /* font-size: 0.9rem; */
  text-align: center;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 1;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: 0;
`;

const RightArrow = styled(ArrowButton)`
  right: 0;
`;

const ScrollbarContainer = styled.div`
  width: 90%;
  margin-top: 1rem;
`;

const Scrollbar = styled.input`
  width: 100%;
  height: 8px;
  background-color: #ddd;
  border-radius: 4px;
  appearance: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--color-main);
    }
  }
`;

function PopularPackages() {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -250 : 250;
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };

  const handleScrollbarChange = (event) => {
    if (sliderRef.current) {
      const maxScroll =
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      const scrollValue = (event.target.value / 100) * maxScroll;
      sliderRef.current.scrollLeft = scrollValue;
    }
  };

  return (
    <Section>
      <Heading>Popular Packages</Heading>
      <SliderContainer>
        {/* <LeftArrow onClick={() => handleScroll("left")}>
          <FaArrowLeft />
        </LeftArrow> */}
        <Slider ref={sliderRef}>
          {[...Array(10)].map((_, index) => (
            <Card key={index}>
              <Image src="/mountain.jpeg" alt="Location Image" />
              <PlaceName>Manali</PlaceName>
              <Price>Starts from $500</Price>
            </Card>
          ))}
        </Slider>
        {/* <RightArrow onClick={() => handleScroll("right")}>
          <FaArrowRight />
        </RightArrow> */}
      </SliderContainer>
      {/* <ScrollbarContainer>
        <Scrollbar
          type="range"
          min="0"
          max="100"
          onChange={handleScrollbarChange}
          aria-label="Slider Scrollbar"
        />
      </ScrollbarContainer> */}
    </Section>
  );
}

export default PopularPackages;
