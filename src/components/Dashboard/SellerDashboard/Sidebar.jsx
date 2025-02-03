/* eslint-disable react/prop-types */
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiPackage,
  FiShoppingCart,
  FiDollarSign,
} from "react-icons/fi";

const SidebarContainer = styled.nav`
  width: 250px;
  border-right: 1px solid #00000080;
  padding: 20px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    margin: 0;
    padding: 15px;
    padding-top: 60px; // Space for the hamburger menu
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 4px 0px #00000040;
  border-radius: 15px;
  padding: 1rem;
  gap: 10px;

  @media (max-width: 768px) {
    box-shadow: none;
    padding: 0.5rem;
  }
`;

const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  font-size: 2rem;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s, color 0.3s;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 12px;
  }

  &.active {
    background-color: #0297cf;
    color: #fff;
  }

  &:hover {
    background-color: #0297cf;
    color: #fff;
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

// Optional: Add a close button for mobile
const CloseButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    font-size: 2rem;
    color: #333;
    cursor: pointer;
  }
`;

function Sidebar({ onClose }) {
  return (
    <SidebarContainer>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <ItemContainer>
        <SidebarLink to="/seller-dashboard" end>
          <Icon>
            <FiHome />
          </Icon>
          Home
        </SidebarLink>
        <SidebarLink to="/seller-dashboard/packages">
          <Icon>
            <FiPackage />
          </Icon>
          Packages
        </SidebarLink>
        <SidebarLink to="/seller-dashboard/orders">
          <Icon>
            <FiShoppingCart />
          </Icon>
          My Orders
        </SidebarLink>
        <SidebarLink to="/seller-dashboard/payments">
          <Icon>
            <FiDollarSign />
          </Icon>
          Payments
        </SidebarLink>
      </ItemContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
