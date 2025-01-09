import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiUser } from "react-icons/fi";

const AdminContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background: linear-gradient(180deg, #2a93d5 72.54%, #1286ba 100%);
  padding: 1.5rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const Logo = styled(NavLink)`
  color: white;
  font-size: 2.8rem;
  font-weight: bold;
  letter-spacing: 2px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const ProfileIcon = styled(FiUser)`
  color: white;
  font-size: 2.4rem;
  cursor: pointer;
  margin-left: 2rem;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 3rem 4rem;
  background-color: #fff;
`;

function AdminLayout() {
  return (
    <AdminContainer>
      <Header>
        <Logo to="/superadmin-panel">Super Admin Panel</Logo>
        <Nav>
          <StyledNavLink to="/superadmin-panel/edits">Edits</StyledNavLink>
          <StyledNavLink to="/superadmin-panel/sellers">Sellers</StyledNavLink>
          <StyledNavLink to="/superadmin-panel/requests">
            Requests
          </StyledNavLink>
          <ProfileIcon />
        </Nav>
      </Header>
      <MainContent>
        <Outlet />
      </MainContent>
    </AdminContainer>
  );
}

export default AdminLayout;
