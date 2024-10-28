/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  /* border: 2px solid green; */
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 3rem;
  letter-spacing: 2px;
`;

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* width: 100%; */
  overflow: hidden;
  height: 50rem;
  /* padding: 1rem; */
  width: 50%;
  /* border: 2px solid red; */
`;

const Slider = styled.div`
  display: flex;
  gap: 1rem;
  transition: transform 0.5s ease;
  overflow-x: scroll;
  /* padding-bottom: 3rem; */
  /* max-width: 50%; */
  /* width: 100%; */
  /* border: 2px solid blue; */
  padding: 5rem 0;

  &::-webkit-scrollbar {
    height: 15px;
    border: none;
    width: 30%;
    margin: 0 auto;
    display: none;
    @media (max-width: 768px) {
      display: none;
    }
  }

  /* &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 10px;
    border: 4px solid black;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #100;
  } */
`;

const Card = styled.div`
  min-width: ${(props) => (props.isHighlighted ? "280px" : "250px")};
  height: ${(props) => (props.isHighlighted ? "380px" : "350px")};
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
`;

const Image = styled.img`
  width: 90%;
  height: 280px;
  border-radius: 6px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
`;

const PlaceName = styled.h3`
  font-weight: bold;
  color: var(--color-grey-800);
  margin: 12px 0 4px;
  text-align: center;
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
      const scrollLeft = sliderRef.current.scrollLeft;
      const cardWidth = 250 + 10; // Width of each card plus gap
      const centerIndex = Math.round(scrollLeft / cardWidth) + 1;
      setHighlightedIndex(centerIndex);
    }
  };

  useEffect(() => {
    sliderRef.current.addEventListener("scroll", updateHighlight);
    return () => {
      sliderRef.current.removeEventListener("scroll", updateHighlight);
    };
  }, []);

  return (
    <Section>
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
