import { useState } from "react";
import styled from "styled-components";

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
  margin-bottom: 5rem;
  display: flex;
  height: 40rem;
  gap: 4rem;
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* border: 2px solid blue; */
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  /* border: 2px solid green; */
  display: flex;
  justify-content: center;
  margin-top: -5rem;
`;

const Image = styled.img`
  width: 65%;
  height: auto;
  position: absolute;
  border-radius: 10px;
  &:first-child {
    transform: rotate(-5deg);
    z-index: 1;
  }
  &:last-child {
    transform: rotate(5deg);
    z-index: 2;
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
  text-align: center;
  color: #333;
  width: 80%;
  line-height: 1.6;
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
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

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
  padding: 8px 14px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

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
      {currentReviews.map((review) => (
        <ReviewCard key={review.id}>
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
        </ReviewCard>
      ))}
      <Pagination>
        <ArrowButton onClick={handlePrev}>&lt;</ArrowButton>
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
        <ArrowButton onClick={handleNext}>&gt;</ArrowButton>
      </Pagination>
    </Container>
  );
};

export default ReviewsComponent;
