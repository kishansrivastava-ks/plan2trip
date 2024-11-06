import styled from "styled-components";
import Info from "../components/TourPackage/Info";
import Itinerary from "../components/TourPackage/Itinerary";
import Highlights from "../components/TourPackage/Highlights";

const Container = styled.div`
  margin-top: 10vh;
  border: 0.5rem solid red;
`;

function TourPackage() {
  return (
    <Container>
      <Info />
      <Itinerary />
      <Highlights />
    </Container>
  );
}

export default TourPackage;
