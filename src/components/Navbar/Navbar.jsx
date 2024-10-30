import { useState, useEffect } from "react";
import styled from "styled-components";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change the background color of the navbar
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav isScrolled={isScrolled}>
      <BrandName>PLAN2TRIP</BrandName>
      <NavLinks>
        <NavLink href="#home">HOME</NavLink>
        <NavLink href="#explore">EXPLORE</NavLink>
        <NavLink href="#packages">PACKAGES</NavLink>
        <NavLink href="#review">REVIEW</NavLink>
        <NavLink href="#contact">CONTACT</NavLink>
      </NavLinks>
      <Buttons>
        <ActionButton>Sign Up</ActionButton>
        <ActionButton secondary>Login</ActionButton>
      </Buttons>
    </Nav>
  );
}

export default Navbar;

// Styled Components

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
  background-color: ${(props) =>
    props.isScrolled ? "rgba(21, 98, 178, 0.85)" : "transparent"};
  /* background-color: red; */
  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
  }
`;

const BrandName = styled.div`
  font-family: "IntegralCF-Bold", sans-serif;
  font-size: 2.5rem;
  letter-spacing: 3px;
  font-style: var(--brand-font-1);
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
    gap: 1rem;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  /* font-size: 1rem; */
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 2px;
  transition: color 0.3s ease;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    color: #34a4d4;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const ActionButton = styled.button`
  background-color: ${(props) => (props.secondary ? "#34A4D4" : "transparent")};
  /* background-color: transparent; */
  /* color: ${(props) => (props.secondary ? "#1562B2" : "#fff")}; */
  box-shadow: ${(props) =>
    props.secondary ? "2px 2px 4px rgba(0, 0, 0, 0.3)" : "none"};
  color: #fff;
  border: none;
  outline: none;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.8rem;
  letter-spacing: 2px;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.secondary ? "#1562B2" : "#333")};
    color: ${(props) => (props.secondary ? "#333" : "#1562B2")};
    background-color: #1562b2;
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
