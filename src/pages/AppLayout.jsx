import styled from "styled-components";
import NavBarUpper from "../components/Navbar/NavbarUpper";
import NavBarLower from "../components/Navbar/NavBarLower";
import Footer from "../components/Footer";
import SearchBar from "../components/Home/SearchBar";
import InfoCarousel from "../components/Home/InfoCarousel";
import RecommendedPackages from "../components/Home/RecommendedPackages";
import Review from "../components/Home/Reviews";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  /* padding: 20px; */
  /* background: linear-gradient(to bottom, #1562b2, #0c0908); */

  &::-webkit-scrollbar {
    width: 8px;
    background-color: rgba(0, 0, 0, 0);
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(21, 98, 178, 0.5);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(21, 98, 178, 0.7);
  }

  &:focus {
    outline: none;
  }
`;

const MainBody = styled.main`
  flex: 1;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

function AppLayout() {
  return (
    <Layout>
      <NavBarUpper />
      <NavBarLower />
      <MainBody>
        <SearchBar />
        <InfoCarousel />
        <RecommendedPackages />
        <Review />
      </MainBody>
      <Footer />
    </Layout>
  );
}

export default AppLayout;
