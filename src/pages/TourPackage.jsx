import styled from "styled-components";
import Info from "../components/TourPackage/Info";
import Itinerary from "../components/TourPackage/Itinerary";

const Container = styled.div`
  margin-top: 10vh;
  border: 0.5rem solid red;
`;

function TourPackage() {
  return (
    <Container>
      <Info />
      <Itinerary />
    </Container>
  );
}

export default TourPackage;
