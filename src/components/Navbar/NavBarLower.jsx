import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

const LowerNavBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
  /* color: #fffeff; */
`;

const NavItemGroup = styled.div`
  display: flex;
  align-items: center;
  /* gap: 40px;  */
  /* background-color: red; */
  height: 100%;

  @media (max-width: 768px) {
    gap: 20px;
    flex-direction: column;
  }
`;

const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  color: #000;
  transition: color 0.3s ease;
  height: 100%;
  /* background-color: red; */
  padding: 0 2rem;
  &:hover {
    color: #000;
    background-color: lightgray;
  }
  transition: all 0.2s ease-in;

  svg {
    margin-right: 8px;
  }

  &:hover > div {
    display: block;
  }
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fffeff;
  color: #0c0908;
  width: 70vw;
  height: 30vh;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  /* border-radius: 8px; */
  padding: 20px;
  z-index: 1000;
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: 0;
  transform: translateY(10px);

  ${NavItem}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DropdownItem = styled.div`
  padding: 10px;
  /* font-size: 1rem; */
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const PlanButton = styled.button`
  background-color: #fff;
  color: #ff6347;
  border: none;
  padding: 10px 20px;
  font-size: 1.5rem;
  margin-top: 1rem;
  border-radius: 2px;
  border: 2px solid #ff6347;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff6347;
    color: #fff;
  }
`;

function NavBarLower() {
  return (
    <LowerNavBarContainer>
      <NavItemGroup>
        <NavItem>
          Destinations&nbsp;&nbsp; <FaChevronDown />
          <DropdownMenu>
            <DropdownItem>Europe</DropdownItem>
            <DropdownItem>Asia</DropdownItem>
            <DropdownItem>America</DropdownItem>
            <DropdownItem>Africa</DropdownItem>
          </DropdownMenu>
        </NavItem>
        <NavItem>
          Services&nbsp;&nbsp; <FaChevronDown />
          <DropdownMenu>
            <DropdownItem>Flight Booking</DropdownItem>
            <DropdownItem>Hotel Reservation</DropdownItem>
            <DropdownItem>Car Rentals</DropdownItem>
            <DropdownItem>Guided Tours</DropdownItem>
          </DropdownMenu>
        </NavItem>
        <NavItem>
          Support &nbsp;&nbsp;
          <FaChevronDown />
          <DropdownMenu>
            <DropdownItem>Contact Us</DropdownItem>
            <DropdownItem>FAQs</DropdownItem>
            <DropdownItem>Live Chat</DropdownItem>
            <DropdownItem>Feedback</DropdownItem>
          </DropdownMenu>
        </NavItem>
      </NavItemGroup>
      <PlanButton>Plan My Holiday</PlanButton>
    </LowerNavBarContainer>
  );
}

export default NavBarLower;
