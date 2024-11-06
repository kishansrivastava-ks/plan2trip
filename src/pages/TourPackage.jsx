import styled from "styled-components";
import Info from "../components/TourPackage/Info";

const Container = styled.div`
  margin-top: 10vh;
`;

function TourPackage() {
  return (
    <Container>
      <Info />
    </Container>
  );
}

export default TourPackage;
