import styled from "styled-components";
import { FiShoppingBag } from "react-icons/fi";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const StatBox = styled.div`
  flex: 1;
  height: 16rem;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 2px 2px 2px 2px #00000040;
  padding: 2rem;

  @media (max-width: 768px) {
    height: 12rem;
    padding: 1.5rem;
    gap: 15px;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  & > h1 {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }
`;

const StatIcon = styled.div`
  background-color: #0297cf;
  width: 60px;
  height: 60px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 2rem;
  }
`;

const StatText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & > h3 {
    font-size: 2.5rem;
    color: black;
    margin: 0;
    font-weight: 200;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
  letter-spacing: 2px;
  margin: 1rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 0.5rem 0;
  }
`;

const TableContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: -2px -2px 4px 0px #00000040, 2px 2px 4px 0px #00000040;

  @media (max-width: 768px) {
    padding: 15px;
    overflow-x: auto;
  }
`;

const TableHeader = styled.div`
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #000000;
  color: #000;

  @media (max-width: 768px) {
    min-width: 600px; // Ensure all columns are visible
  }
`;

const TableRow = styled.div`
  display: flex;
  padding: 10px 0;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    min-width: 600px; // Match header width
  }
`;

const TableColumn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #000;
  font-size: 1.7rem;
  letter-spacing: 1px;

  &:first-child {
    flex: 5;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;

    &:first-child {
      flex: 3; // Slightly reduce the first column width on mobile
    }
  }
`;

const PackagePhoto = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ddd;
  border-radius: 4px;
  margin-right: 2rem;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 1rem;
  }
`;

const StatusCircle = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ status }) =>
    status === "In Stock" ? "#16C098" : "#FF0000"};
`;

function SellerHome() {
  return (
    <Container>
      <StatsContainer>
        <StatBox>
          <div>
            <StatIcon>
              <FiShoppingBag />
            </StatIcon>
            <StatText>
              <h3>Today&apos;s Sales</h3>
            </StatText>
          </div>
          <h1>$5000</h1>
        </StatBox>
        <StatBox>
          <div>
            <StatIcon>
              <FiShoppingBag />
            </StatIcon>
            <StatText>
              <h3>Today&apos;s Packages</h3>
            </StatText>
          </div>
          <h1>25 Packages</h1>
        </StatBox>
        <StatBox>
          <div>
            <StatIcon>
              <FiShoppingBag />
            </StatIcon>
            <StatText>
              <h3>Monthly Sales</h3>
            </StatText>
          </div>
          <h1>$42,000</h1>
        </StatBox>
      </StatsContainer>

      <div>
        <SectionHeading>Top Selling Packages</SectionHeading>
        <TableContainer>
          <TableHeader>
            <TableColumn>Package Name</TableColumn>
            <TableColumn>Price</TableColumn>
            <TableColumn>Sold</TableColumn>
            <TableColumn>Status</TableColumn>
          </TableHeader>
          <TableRow>
            <TableColumn>
              <PackagePhoto />
              Kullu - Manali - Rohtang (5N-4D) Package
            </TableColumn>
            <TableColumn>$1200</TableColumn>
            <TableColumn>50</TableColumn>
            <TableColumn>
              <StatusCircle status="In Stock" />
              In Stock
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <PackagePhoto />
              Shimla - Kufri (3N-2D) Package
            </TableColumn>
            <TableColumn>$800</TableColumn>
            <TableColumn>30</TableColumn>
            <TableColumn>
              <StatusCircle status="Out of Stock" />
              Out of Stock
            </TableColumn>
          </TableRow>
        </TableContainer>
      </div>
    </Container>
  );
}

export default SellerHome;
