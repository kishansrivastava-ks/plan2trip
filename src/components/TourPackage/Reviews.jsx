import styled from "styled-components";
import {
  FaStar,
  FaBuilding,
  FaCoffee,
  FaCar,
  FaUser,
  FaPlane,
} from "react-icons/fa"; // Importing icons from react-icons

// Main Container for the Reviews component
const ReviewsContainer = styled.div`
  width: 90%;
  margin: 2rem auto;
  margin-bottom: 8rem;
`;

// Heading and Bullet
const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const BulletCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: black;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 0.8rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
`;

const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #ddd;
  margin-bottom: 6rem;
`;

// Reviews List
const ReviewsList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`;

// Individual Review Item
const ReviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`;

// Icon Circle
const IconCircle = styled.div`
  width: 10rem;
  height: 10rem;

  background: linear-gradient(180deg, #159dd1 0%, #1286ba 100%);

  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 5rem;
  margin-bottom: 0.5rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

// Review Text
const ReviewText = styled.p`
  font-size: 2.5rem;
  letter-spacing: 2px;

  font-weight: 500;
  color: black;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 0.3rem;
`;

// Rating Container
const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  color: #444;
`;

// Yellow Star Icon for Rating
const StarIcon = styled(FaStar)`
  color: #ffd700;
  margin-right: 1rem;
  font-size: 3rem;
`;

function Reviews() {
  // Data for reviews
  const reviewItems = [
    { icon: <FaStar />, text: "Overall Rating", rating: "4.5 / 5" },
    { icon: <FaBuilding />, text: "Stay", rating: "4.5 / 5" },
    { icon: <FaCoffee />, text: "Meals", rating: "4.5 / 5" },
    { icon: <FaCar />, text: "Transport", rating: "4.5 / 5" },
    { icon: <FaUser />, text: "Guide", rating: "4.5 / 5" },
    { icon: <FaPlane />, text: "Train / Flight", rating: "4.5 / 5" },
  ];

  return (
    <ReviewsContainer>
      {/* Heading with Bullet and Line */}
      <Heading>
        <BulletCircle />
        <Title>REVIEWS</Title>
      </Heading>
      <HorizontalLine />

      {/* Reviews List */}
      <ReviewsList>
        {reviewItems.map((item, index) => (
          <ReviewItem key={index}>
            <IconCircle>{item.icon}</IconCircle>
            <ReviewText>{item.text}</ReviewText>
            <Rating>
              <StarIcon />
              {item.rating}
            </Rating>
          </ReviewItem>
        ))}
      </ReviewsList>
    </ReviewsContainer>
  );
}

export default Reviews;
