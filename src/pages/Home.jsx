import styled from "styled-components";
import Reviews from "../components/Home/Reviews";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
`;

function Home() {
  return (
    <Container>
      <Reviews />
    </Container>
  );
}

export default Home;
