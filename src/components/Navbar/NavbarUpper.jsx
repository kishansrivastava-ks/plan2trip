import styled from "styled-components";
import {
  FaPhoneAlt,
  FaUserTie,
  FaBlog,
  FaTags,
  FaMobileAlt,
} from "react-icons/fa";

const NavBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f1f1f1;
  color: #f1f1f1;
`;

const Logo = styled.img`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fffeff;
  height: 5rem;
  cursor: pointer;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  /* &:last-child {
    border-right: 3px solid #0e4886;
    border-radius: 10px;
  } */

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  /* font-size: 0.9rem; */
  color: #0e4886;
  font-weight: 500;

  svg {
    margin-right: 10px;
    color: #0e4886;
  }

  &:hover {
    color: #0e4886;
    cursor: pointer;
    transform: scale(1.08);
  }
  transition: all 0.2s ease-in-out;
`;

const LoginButton = styled.button`
  /* background-color: #0c0908; */
  color: #0e4886;
  border: none;
  padding: 6px 18px;
  border-radius: 2px;
  margin-left: -2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0e4886;
    color: #fff;
  }
`;

function NavBarUpper() {
  return (
    <NavBarContainer>
      <Logo src="/logo.png" />
      <NavItems>
        <NavItem>
          <FaPhoneAlt /> 1800-123-5555
        </NavItem>
        <NavItem>
          <FaUserTie /> Travel Agent? Join Us!
        </NavItem>
        <NavItem>
          <FaBlog /> Blog
        </NavItem>
        <NavItem>
          <FaTags /> Offers
        </NavItem>
        <NavItem>
          <FaMobileAlt /> Download App
        </NavItem>
        <NavItem style={{ fontSize: "2.5rem" }}>|</NavItem>

        <LoginButton>Login</LoginButton>
      </NavItems>
    </NavBarContainer>
  );
}

export default NavBarUpper;
