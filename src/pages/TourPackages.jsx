import styled from "styled-components";
import Packages from "../components/TourPackages/Packages";
import SearchBox from "../components/Home/SearchBox";

const Container = styled.div`
  margin-top: 18vh;
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
