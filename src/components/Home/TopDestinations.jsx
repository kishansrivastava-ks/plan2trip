/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  margin-top: 4rem;
`;

const Heading = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 3rem;
  margin-top: 5rem;
  letter-spacing: 3px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-family: "Integral CF", sans-serif;

  color: #000;
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 52rem;
  width: 60%;
  @media (max-width: 768px) {
    width: 95%;
    height: auto;
  }
`;

const Slider = styled.div`
  display: flex;
  gap: 1rem;
  transition: transform 0.5s ease;
  overflow-x: scroll;
  padding: 5rem 0;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 12px;
    border: none;
    width: 30%;
    margin: 0 auto;
    @media (max-width: 768px) {
      display: none;
    }
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #100;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 10px;
    border: 3.5px solid black;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  @media (max-width: 768px) {
    padding: 2rem 0;
    gap: 0.5rem;
  }
`;

const Card = styled.div`
  min-width: ${(props) => (props.isHighlighted ? "300px" : "270px")};
  height: ${(props) => (props.isHighlighted ? "400px" : "370px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  margin: 0 10px;
  transform: ${(props) =>
    props.isHighlighted ? "scale(1.1) translateY(-10px)" : "scale(1)"};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${(props) =>
    props.isHighlighted ? "0 8px 16px rgba(0, 0, 0, 0.3)" : "none"};
  @media (max-width: 768px) {
    min-width: 250px;
    height: 350px;
    margin: 0 5px;
  }
`;

const Image = styled.img`
  width: 91%;
  height: 300px;
  border-radius: 6px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin: 1rem;
  margin-top: 1.2rem;
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const PlaceName = styled.h3`
  font-weight: bold;
  color: var(--color-grey-800);
  margin: 12px 0 4px;
  text-align: center;
  font-size: 2.2rem;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  /* font-family: var(--font-poppins); */
`;

const Price = styled.p`
  font-weight: 500;
  color: var(--color-blue-700);
  text-align: center;
`;

function TopDestinations() {
  const sliderRef = useRef(null);
  const [highlightedIndex, setHighlightedIndex] = useState(1);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -250 : 250;
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };

  const updateHighlight = () => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const containerWidth = container.offsetWidth;
      const scrollLeft = container.scrollLeft;
      const cardWidth = 280; // Average width of a card (including margin)

      // Calculate the center position of the viewport
      const centerViewport = containerWidth / 2;
      // Calculate which card should be centered based on scroll position
      const centerCard = Math.round(
        (scrollLeft + centerViewport - cardWidth / 2) / cardWidth
      );

      setHighlightedIndex(centerCard);
    }
  };

  useEffect(() => {
    const currentRef = sliderRef.current;

    if (currentRef) {
      currentRef.addEventListener("scroll", updateHighlight);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", updateHighlight);
      }
    };
  }, []);

  return (
    <Section id="topDestinations">
      <Heading>Top Destinations</Heading>
      <SliderContainer>
        <Slider ref={sliderRef}>
          {[...Array(10)].map((_, index) => (
            <Card key={index} isHighlighted={index === highlightedIndex}>
              <Image src="/goa.jpeg" alt="Location Image" />
              <PlaceName>Goa</PlaceName>
            </Card>
          ))}
        </Slider>
      </SliderContainer>
    </Section>
  );
}

export default TopDestinations;
