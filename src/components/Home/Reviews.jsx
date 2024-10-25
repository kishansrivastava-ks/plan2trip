import styled from "styled-components";

const ReviewsSection = styled.section`
  height: 90vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("/reviews-bg.jpeg") center center/cover no-repeat;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Heading = styled.h2`
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  z-index: 2;
`;

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  z-index: 2;
  padding: 1rem;
`;

const ReviewBox = styled.div`
  width: 70%;
  height: 30%;
  background-color: white;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  box-shadow: var(--shadow-md);

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const LeftColumn = styled.div`
  flex: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ReviewText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const SeeMoreButton = styled.button`
  align-self: flex-start;
  padding: 0.7rem 1.5rem;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-main);
  }
`;

const RightColumn = styled.div`
  flex: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserPhoto = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const UserName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const UserDesignation = styled.p`
  font-size: 1rem;
  color: gray;
  margin-bottom: 0.5rem;
`;

const PlaceVisited = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

function Reviews() {
  return (
    <ReviewsSection>
      <Overlay />
      <Heading>REVIEWS</Heading>
      <ReviewsContainer>
        <ReviewBox>
          <LeftColumn>
            <ReviewText>
              Had an amazing experience traveling to Kerala. The scenery was
              breathtaking and the trip was very well organized.
            </ReviewText>
            <SeeMoreButton>See More</SeeMoreButton>
          </LeftColumn>
          <RightColumn>
            <UserPhoto src="/user.jpg" alt="User 1" />
            <UserName>John Doe</UserName>
            <UserDesignation>Student</UserDesignation>
            <PlaceVisited>Visited Kerala</PlaceVisited>
          </RightColumn>
        </ReviewBox>

        <ReviewBox>
          <LeftColumn>
            <ReviewText>
              A wonderful trip to Himachal! The mountains were mesmerizing and
              the hospitality made it all the more special.
            </ReviewText>
            <SeeMoreButton>See More</SeeMoreButton>
          </LeftColumn>
          <RightColumn>
            <UserPhoto src="/user.jpg" alt="User 2" />
            <UserName>Jane Smith</UserName>
            <UserDesignation>Engineer</UserDesignation>
            <PlaceVisited>Visited Himachal</PlaceVisited>
          </RightColumn>
        </ReviewBox>
      </ReviewsContainer>
    </ReviewsSection>
  );
}

export default Reviews;
