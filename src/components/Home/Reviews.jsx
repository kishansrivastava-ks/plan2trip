/* eslint-disable react/prop-types */
import styled from "styled-components";

const ReviewsContainer = styled.div`
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  position: relative;
  background: url("/reviews-bg.jpg") center/cover no-repeat;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: -1;
  }
`;
const ReviewsHeader = styled.h2`
  letter-spacing: 4px;
  color: #052e5a;
  margin-bottom: 2rem;
`;
// Styled Components
const Caption = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 20%);
  color: white;
  text-transform: uppercase;
  font-size: 1.7rem;
  text-align: center;
  opacity: 0;
  transition: all 0.5s;
  backface-visibility: hidden;
`;
const ReviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: translateX(-4rem) scale(1.4);
  backface-visibility: hidden;
  transition: all 0.5s;
`;
const ReviewCardContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  padding: 5rem;
  padding-left: 9rem;
  font-size: 1.6rem;
  transform: skewX(-12deg);
  transition: transform 0.3s ease;

  &:hover ${Caption} {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  &:hover ${ReviewImage} {
    transform: translateX(-4rem) scale(1);
    filter: blur(3px) brightness(85%);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 4rem;
    padding-left: 7rem;
  }

  @media (max-width: 576px) {
    transform: skewX(0);
    padding: 3rem;
  }
`;

const ImageShape = styled.div`
  width: 13rem;
  height: 13rem;
  float: left;
  shape-outside: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  transform: translateX(-3rem) skewX(12deg);
  position: relative;
  transition: transform 0.3s ease;

  @media (max-width: 576px) {
    transform: translateX(-3rem) skewX(0);
  }
`;

const ReviewText = styled.div`
  transform: skewX(12deg);
  font-size: 1.9rem;
  letter-spacing: 1px;

  @media (max-width: 576px) {
    transform: skewX(0);
  }
`;

// Main ReviewCard Component
const ReviewCard = ({ imageSrc, reviewText, caption }) => {
  return (
    <ReviewCardContainer>
      <ImageShape>
        <ReviewImage src={imageSrc} alt="Reviewer" />
        <Caption>{caption}</Caption>
      </ImageShape>
      <ReviewText>{reviewText}</ReviewText>
    </ReviewCardContainer>
  );
};

// Usage example in the same file (Optional)
const Review = () => {
  return (
    <ReviewsContainer>
      <ReviewsHeader>WE MAKE PEOPLE GENUINELY HAPPY</ReviewsHeader>

      <ReviewCard
        imageSrc="/user-1.jpg"
        reviewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet debitis quibusdam minus eaque rem rerum ipsam consequatur suscipit iusto harum, repellat, nulla magnam repudiandae cumque ad inventore, veniam et blanditiis? consequatur suscipit iusto harum, repellat, nulla magnam repudiandae cumque ad inventore, veniam et blanditiis?"
        caption="Jake William "
      />
      <ReviewCard
        imageSrc="/user-2.jpg"
        reviewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet debitis quibusdam minus eaque rem rerum ipsam consequatur suscipit iusto harum, repellat, nulla magnam repudiandae cumque ad inventore, veniam et blanditiis? consequatur suscipit iusto harum, repellat, nulla magnam repudiandae cumque ad inventore, veniam et blanditiis?"
        caption="Lana Rose"
      />
    </ReviewsContainer>
  );
};

export default Review;
