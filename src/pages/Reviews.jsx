import styled from "styled-components";
import ReviewsComponent from "../components/Reviews/ReviewsComponent";

const Container = styled.div`
  margin-top: 10vh;
  /* border: 0.5rem solid red; */
`;

const Heading = styled.h1`
  text-transform: uppercase;
  /* border: 2px solid red; */
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
`;

function Reviews() {
  return (
    <Container>
      <Heading>Reviews</Heading>
      <ReviewsComponent />
    </Container>
  );
}

export default Reviews;