import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../../components/Dashboard/SellerDashboard/Header";
import Sidebar from "../../components/Dashboard/SellerDashboard/Sidebar";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 4rem;
`;

const BodyContainer = styled.div`
  display: flex;
  flex: 1;
`;

const MainBody = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  overflow-y: auto;
`;

function DashboardLayout() {
  return (
    <DashboardContainer>
      <Header>Dashboard</Header>
      <BodyContainer>
        <Sidebar />
        <MainBody>
          <Outlet />
        </MainBody>
      </BodyContainer>
    </DashboardContainer>
  );
}

export default DashboardLayout;
