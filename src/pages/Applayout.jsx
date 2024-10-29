/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MainBody = styled.main`
  /* margin-top: 10vh; */
  flex: 1;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

function AppLayout() {
  return (
    <Layout>
      <Navbar />

      <MainBody>
        <Outlet />
      </MainBody>

      <Footer />
    </Layout>
  );
}

export default AppLayout;
