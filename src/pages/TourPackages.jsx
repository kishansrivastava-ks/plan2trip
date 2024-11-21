import styled from "styled-components";
import Packages from "../components/TourPackages/Packages";

const Container = styled.div`
  margin-top: 15vh;
`;

function TourPackages() {
  return (
    <Container>
      <Packages />
    </Container>
  );
}

export default TourPackages;
