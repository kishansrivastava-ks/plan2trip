import styled from "styled-components";
import Packages from "../components/TourPackages/Packages";
import SearchBox from "../components/Home/SearchBox";

const Container = styled.div`
  margin-top: 18vh;
  @media (max-width: 768px) {
    margin-top: 10vh;
  }
`;

function TourPackages() {
  return (
    <Container>
      <SearchBox />
      <Packages />
    </Container>
  );
}

export default TourPackages;
