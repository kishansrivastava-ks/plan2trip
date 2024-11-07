import styled from "styled-components";
import Info from "../components/TourPackage/Info";
import Itinerary from "../components/TourPackage/Itinerary";
import Highlights from "../components/TourPackage/Highlights";
import Inclusion from "../components/TourPackage/Inclusion";
import Reviews from "../components/TourPackage/Reviews";
import Stay from "../components/TourPackage/Stay";

const Container = styled.div`
  margin-top: 10vh;
  /* border: 0.5rem solid red; */
`;

function TourPackage() {
  return (
    <Container>
      <Info />
      <Itinerary />
      <Highlights />
      <Inclusion />
      <Reviews />
      <Stay />
    </Container>
  );
}

export default TourPackage;
