import styled from "styled-components";
import { FiBell, FiMessageSquare, FiUser } from "react-icons/fi";

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  background-color: transparent;
  border-bottom: 1px solid #00000080;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 2px;
`;

const LeftSection = styled.div`
  color: black;
`;

const RightSection = styled.div`
  display: flex;
  gap: 3.5rem;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 3rem;
  color: black;
  cursor: pointer;
`;

function Header() {
  return (
    <HeaderContainer>
      <LeftSection>DASHBOARD</LeftSection>
      <RightSection>
        <Icon>
          <FiBell />
        </Icon>
        <Icon>
          <FiMessageSquare />
        </Icon>
        <Icon>
          <FiUser />
        </Icon>
      </RightSection>
    </HeaderContainer>
  );
}

export default Header;
