/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Container = styled.div`
  width: 90%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReviewCard = styled.div`
  width: 85%;
  /* border: 2px solid red; */
  margin-bottom: 10rem;
  display: flex;
  height: 40rem;
  /* gap: 2rem; */
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* border: 2px solid blue; */
`;

// const ImageWrapper = styled.div`
//   position: relative;
//   width: 80%;
//   height: 80%;
//   /* border: 2px solid green; */
//   display: flex;
//   justify-content: center;
//   margin-top: -5rem;
// `;

const ImageWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  margin-top: -5rem;
  perspective: 1000px; /* Adds depth perception for 3D transforms */
`;

// const Image = styled.img`
//   width: 65%;
//   height: auto;
//   position: absolute;
//   border-radius: 10px;
//   transform-origin: bottom left;

//   &:first-child {
//     transform: rotate(-5deg);
//     z-index: 1;
//   }
//   &:last-child {
//     transform: rotate(5deg);
//     z-index: 2;
//     margin-top: -2rem;
//   }
// `;

const Image = styled.img`
  width: 65%;
  height: auto;
  position: absolute;
  border-radius: 10px;
  transform-origin: bottom center;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:first-child {
    /* transform: rotate(-5deg) translateY(0); */
    transform: rotate(-5deg);
    z-index: 1;

    &:hover {
      transform: rotate(0deg) translateY(-20px) scale(1.05);
      z-index: 3;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
      outline: 5px solid #2a93d5;
      outline-offset: 0.5rem;
      filter: brightness(1.1);
      /* border-radius: 0; */
      cursor: pointer;
    }
  }

  &:last-child {
    /* transform: rotate(5deg) translateY(-2rem); */
    transform: rotate(5deg);
    z-index: 2;

    &:hover {
      transform: rotate(0deg) translateY(-30px) scale(1.05);
      z-index: 3;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
      outline: 5px solid #2a93d5;
      outline-offset: 0.5rem;
      filter: brightness(1.1);
      cursor: pointer;
      /* border-radius: 0; */
    }
  }
`;
const RightColumn = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* border: 2px solid blue; */
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const UserImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const UserName = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Body = styled.p`
  font-size: 2rem;
  text-align: left;
  color: #333;
  width: 80%;
  line-height: 1.8;
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 20px;
`;

const PageNumber = styled.button`
  background: ${({ active }) =>
    active ? "linear-gradient(180deg, #159dd1 72.54%, #1286ba 100%)" : "#fff"};

  color: ${({ active }) => (active ? "#fff" : "#000")};
  border: 1px solid #ccc;
  padding: 6px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  font-size: 2.5rem;

  &:hover {
    /* background-color: #007bff; */
    background: linear-gradient(180deg, #159dd1 72.54%, #1286ba 100%);

    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

const ArrowButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 9px 9px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  font-size: 3rem;

  &:hover {
    background: linear-gradient(180deg, #159dd1 72.54%, #1286ba 100%);
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`;

const reviewsData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  reviewer: `Reviewer ${i + 1}`,
  text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum sit expedita est et neque, quam vitae dolorum hic velit totam, ducimus vel enim id in sed itaque ea doloribus voluptatibus quisquam consequatur magnam cum consequuntur. Id at, exercitationem nemo rem, quibusdam veniam voluptatum harum tempora quidem nostrum temporibus molestias.`,
  imageBack: "/manali-2.jpg",
  imageFront: "/mountain.jpeg",
  userPhoto: "/user.jpg",
}));

const ReviewsComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 4;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(reviewsData.length / reviewsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const startIndex = (currentPage - 1) * reviewsPerPage;
  const currentReviews = reviewsData.slice(
    startIndex,
    startIndex + reviewsPerPage
  );

  return (
    <Container>
      {currentReviews.map((review, index) => (
        <ReviewCard
          key={review.id}
          isReversed={(currentPage - 1) * reviewsPerPage + (index % 2) !== 0}
        >
          {((currentPage - 1) * reviewsPerPage + index) % 2 === 0 ? (
            <>
              <LeftColumn>
                <ImageWrapper>
                  <Image src={review.imageBack} alt="Review background" />
                  <Image src={review.imageFront} alt="Review front" />
                </ImageWrapper>
              </LeftColumn>
              <RightColumn>
                <Header>
                  <UserImage src={review.userPhoto} alt="User" />
                  <UserName>{review.reviewer}</UserName>
                </Header>
                <Body>{review.text}</Body>
              </RightColumn>
            </>
          ) : (
            <>
              <RightColumn>
                <Header>
                  <UserImage src={review.userPhoto} alt="User" />
                  <UserName>{review.reviewer}</UserName>
                </Header>
                <Body>{review.text}</Body>
              </RightColumn>
              <LeftColumn>
                <ImageWrapper>
                  <Image src={review.imageBack} alt="Review background" />
                  <Image src={review.imageFront} alt="Review front" />
                </ImageWrapper>
              </LeftColumn>
            </>
          )}
        </ReviewCard>
      ))}

      <Pagination>
        <ArrowButton onClick={handlePrev}>
          <FiChevronLeft />
        </ArrowButton>
        {Array.from(
          { length: Math.ceil(reviewsData.length / reviewsPerPage) },
          (_, i) => (
            <PageNumber
              key={i + 1}
              active={currentPage === i + 1}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </PageNumber>
          )
        )}
        <ArrowButton onClick={handleNext}>
          <FiChevronRight />
        </ArrowButton>
      </Pagination>
    </Container>
  );
};

export default ReviewsComponent;
