/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  z-index: 1000;
  transition: background-color 0.3s ease;
  background: linear-gradient(
    90deg,
    #21709b 0%,
    #0297cf 25%,
    #0297cf 75.26%,
    #2178a9 100%
  );
  font-family: "Integral CF", sans-serif;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const BrandName = styled(Link)`
  font-size: 2.5rem;
  letter-spacing: 3px;
  font-style: var(--brand-font-1);
  color: #fff;
  text-decoration: none;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 2px;
  transition: color 0.3s ease;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    color: #34a4d4;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ActionButton = styled.button`
  background-color: ${(props) => (props.secondary ? "#34A4D4" : "transparent")};
  box-shadow: ${(props) =>
    props.secondary ? "2px 2px 4px rgba(0, 0, 0, 0.3)" : "none"};
  color: #fff;
  border: none;
  outline: none;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  cursor: pointer;
  letter-spacing: 2px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #1562b2;
    color: #fff;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 80%;
  max-width: 400px;
  height: 100vh;
  background: linear-gradient(180deg, #21709b 0%, #0297cf 50%, #2178a9 100%);
  z-index: 1001;
  transition: right 0.3s ease-in-out;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  overflow-y: auto;
`;

const MobileNavHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const MobileNavLink = styled(NavLink)`
  font-size: 1.2rem;
`;

const MobileButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const MobileActionButton = styled(ActionButton)`
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 1000;
`;

function Navbar({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <Nav className={isScrolled ? "scrolled" : ""}>
        <BrandName to="/">PLAN2TRIP</BrandName>
        <NavLinks>
          <NavLink onClick={(e) => handleClick(e, "pageTop")}>HOME</NavLink>
          <NavLink onClick={(e) => handleClick(e, "topDestinations")}>
            EXPLORE
          </NavLink>
          <NavLink onClick={(e) => handleClick(e, "popularPackages")}>
            PACKAGES
          </NavLink>
          <NavLink onClick={(e) => handleClick(e, "reviews")}>REVIEW</NavLink>
          <NavLink onClick={(e) => handleClick(e, "footer")}>CONTACT</NavLink>
        </NavLinks>
        <Buttons>
          <ActionButton>Sign Up</ActionButton>
          <ActionButton secondary>Login</ActionButton>
        </Buttons>
        <HamburgerButton onClick={() => setIsOpen(true)}>
          <Menu size={24} />
        </HamburgerButton>
      </Nav>

      <MobileMenu isOpen={isOpen}>
        <MobileNavHeader>
          <CloseButton onClick={() => setIsOpen(false)}>
            <X size={24} />
          </CloseButton>
        </MobileNavHeader>
        <MobileNavLinks>
          <MobileNavLink onClick={(e) => handleClick(e, "pageTop")}>
            HOME
          </MobileNavLink>
          <MobileNavLink onClick={(e) => handleClick(e, "topDestinations")}>
            EXPLORE
          </MobileNavLink>
          <MobileNavLink onClick={(e) => handleClick(e, "popularPackages")}>
            PACKAGES
          </MobileNavLink>
          <MobileNavLink onClick={(e) => handleClick(e, "reviews")}>
            REVIEW
          </MobileNavLink>
          <MobileNavLink onClick={(e) => handleClick(e, "footer")}>
            CONTACT
          </MobileNavLink>
        </MobileNavLinks>
        <MobileButtons>
          <MobileActionButton>Sign Up</MobileActionButton>
          <MobileActionButton secondary>Login</MobileActionButton>
        </MobileButtons>
      </MobileMenu>

      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </>
  );
}

export default Navbar;
