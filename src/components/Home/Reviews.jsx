import { Link } from "react-router-dom";
import styled from "styled-components";

const ReviewsSection = styled.section`
  height: 110vh;
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
  font-size: 3.5rem;
  font-weight: bold;
  text-align: center;
  z-index: 2;
  /* margin-bottom: 3rem; */
  margin-top: 3rem;
  margin-bottom: 2.5rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  letter-spacing: 2px;
`;

const ReviewsContainer = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  z-index: 2;
  padding: 2rem;
  margin-bottom: 5rem;
`;

const ReviewBox = styled.div`
  width: 65%;
  /* height: 30%; */
  background-color: #fff;
  padding: 4rem;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
  box-shadow: var(--shadow-md);
  /* border-radius: 38px; */
  border-radius: 8px;

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
  font-size: 1.8rem;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 1rem;
  /* width: 100%; */
  letter-spacing: 1px;
  line-height: 1.6;
  text-align: justify;
`;

const SeeMoreButton = styled(Link)`
  align-self: flex-start;
  padding: 0.7rem 2.5rem;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  letter-spacing: 2px;
  border-radius: 24px;
  transition: background-color 0.3s ease;
  margin-left: auto;

  &:hover {
    background-color: var(--color-main);
    background-color: #fff;
    color: #000;
    font-weight: bold;
    /* border: 2px solid black; */
    outline: 2px solid black;
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
  font-size: 2.5rem;
  font-weight: bold;
  /* margin-bottom: 0.5rem; */
  letter-spacing: 1px;
`;

const UserDesignation = styled.p`
  /* font-size: 1rem; */
  color: gray;
  /* margin-bottom: 0.5rem; */
  letter-spacing: 1px;
`;

const PlaceVisited = styled.p`
  /* font-size: 1rem; */
  font-weight: bold;
  letter-spacing: 1px;
`;

function Reviews() {
  return (
    <ReviewsSection id="reviews">
      <Overlay />
      <Heading>REVIEWS</Heading>
      <ReviewsContainer>
        <ReviewBox>
          <LeftColumn>
            <ReviewText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              quas officiis praesentium! Ipsam dolores illo et, fugiat harum
              accusamus ex culpa vel rem. Velit, voluptatem in? Quisquam nobis
              fuga adipisci inventore vitae, non natus reprehenderit corrupti
              officiis? Deleniti tenetur quia, amet fuga sit pariatur
              perspiciatis explicabo minima hic eum doloribus?
            </ReviewText>
            <SeeMoreButton to="/reviews">See More</SeeMoreButton>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis
              repudiandae architecto illum, ipsam ratione et iusto in quisquam
              vel. Eligendi, velit ut repellat culpa cumque repudiandae
              cupiditate officiis laboriosam quam eum a vero debitis libero modi
              sequi quo dolor voluptatibus, asperiores iste obcaecati id, nemo
              sint dolores. Rem, quisquam!
            </ReviewText>
            <SeeMoreButton to="reviews">See More</SeeMoreButton>
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
