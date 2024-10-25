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
  margin-bottom: 3rem;
`;

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  z-index: 2;
  padding: 2rem;
`;

const ReviewBox = styled.div`
  width: 70%;
  /* height: 30%; */
  background-color: #fff;
  padding: 3rem;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
  box-shadow: var(--shadow-md);
  border-radius: 3px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const LeftColumn = styled.div`
  flex: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 2px solid #aaaa;
  /* border: 1px solid red; */
  padding-right: 2rem;
`;

const ReviewText = styled.p`
  /* font-size: 1.2rem; */
  margin-bottom: 1rem;
  /* width: 100%; */
  letter-spacing: 1px;
`;

const SeeMoreButton = styled.button`
  align-self: flex-start;
  padding: 0.7rem 2.5rem;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  letter-spacing: 1px;
  border-radius: 24px;
  transition: background-color 0.3s ease;
  margin-left: auto;
  &:hover {
    background-color: var(--color-main);
  }
`;

const RightColumn = styled.div`
  flex: 18%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
`;

const UserPhoto = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const UserName = styled.h3`
  /* font-size: 1.5rem; */
  font-weight: bold;
  /* margin-bottom: 0.5rem; */
  letter-spacing: 1px;
`;

const UserDesignation = styled.p`
  /* font-size: 1rem; */
  color: gray;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
`;

const PlaceVisited = styled.p`
  /* font-size: 1rem; */
  font-weight: bold;
  letter-spacing: 1px;
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
