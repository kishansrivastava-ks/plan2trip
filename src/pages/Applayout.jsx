/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* height: max-content; */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
  /* border: 0.5rem solid red; */
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
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    setIsScrolled(scrollTop > 50);
  };

  return (
    <Layout onScroll={handleScroll}>
      <Navbar isScrolled={isScrolled} />

      <MainBody>
        <Outlet />
      </MainBody>

      <Footer />
    </Layout>
  );
}

export default AppLayout;
