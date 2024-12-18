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
  /* background-color: #f7f7f7; */
  border-right: 1px solid #00000080;
  padding: 20px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 4px 0px #00000040;
  border-radius: 15px;
  padding: 1rem;
  gap: 10px;
`;

const SidebarLink = styled(NavLink)`
  /* border: 2px solid blue; */
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  font-size: 2rem;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s, color 0.3s;

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
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <ItemContainer>
        <SidebarLink to="/seller-dashboard/home" activeClassName="active">
          <Icon>
            <FiHome />
          </Icon>
          <p>Home</p>
        </SidebarLink>
        <SidebarLink to="/seller-dashboard/packages" activeClassName="active">
          <Icon>
            <FiPackage />
          </Icon>
          Packages
        </SidebarLink>
        <SidebarLink to="/seller-dashboard/orders" activeClassName="active">
          <Icon>
            <FiShoppingCart />
          </Icon>
          My Orders
        </SidebarLink>
        <SidebarLink to="/seller-dashboard/payments" activeClassName="active">
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
