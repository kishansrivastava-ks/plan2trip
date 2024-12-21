import styled from "styled-components";
import { Link } from "react-router-dom";
import Overview from "../../components/Dashboard/SellerDashboard/ModifyPackage/Overview";
import AvailabilityQuantity from "../../components/Dashboard/SellerDashboard/ModifyPackage/AvailabilityQuantity";
import Itinerary from "../../components/Dashboard/SellerDashboard/ModifyPackage/Itinerary";

const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  /* border: 2px solid red; */
  height: 60rem;
  /* padding-right: 1rem; */
  &::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #2a93d5 transparent;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2a93d5;
    background-color: #333333;
    border-radius: 16px;
    border: 4px solid transparent;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: black;
`;

const AddPackageButton = styled(Link)`
  display: flex;
  align-items: center;
  background-color: #2a93d5;
  color: white;
  padding: 10px 30px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.8rem;
  gap: 10px;

  &:hover {
    background-color: #237ab8;
  }
`;

function ModifyPackage() {
  return (
    <Container>
      <Header>
        <Title>My Packages</Title>
        <AddPackageButton to="/seller-dashboard/packages/add-package">
          <span>+</span> Add Package
        </AddPackageButton>
      </Header>
      <Overview />
      <AvailabilityQuantity />
      <Itinerary />
    </Container>
  );
}

export default ModifyPackage;
