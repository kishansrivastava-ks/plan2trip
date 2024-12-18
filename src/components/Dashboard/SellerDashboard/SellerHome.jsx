import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const StatBox = styled.div`
  flex: 1;
  height: 30rem;
  background-color: #f7f7f7;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  box-shadow: 2px 2px 4px 0px #00000040;
`;

const StatIcon = styled.div`
  background-color: #0297cf;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`;

const StatText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & > h3 {
    font-size: 1.5rem;
    color: black;
    margin: 0;
  }

  & > h1 {
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: black;
`;

const TableContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: -2px -2px 4px 0px #00000040, 2px 2px 4px 0px #00000040;
`;

const TableHeader = styled.div`
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #000000;
`;

const TableRow = styled.div`
  display: flex;
  padding: 10px 0;
  align-items: center;
  gap: 20px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const TableColumn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;

  &:first-child {
    flex: 2;
  }
`;

const PackagePhoto = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ddd;
  border-radius: 4px;
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
          <StatIcon>👜</StatIcon>
          <StatText>
            <h3>Today&apos;s Sales</h3>
            <h1>$5000</h1>
          </StatText>
        </StatBox>
        <StatBox>
          <StatIcon>👜</StatIcon>
          <StatText>
            <h3>Today&apos;s Packages</h3>
            <h1>25 Packages</h1>
          </StatText>
        </StatBox>
        <StatBox>
          <StatIcon>👜</StatIcon>
          <StatText>
            <h3>Monthly Sales</h3>
            <h1>@$42,000</h1>
          </StatText>
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
