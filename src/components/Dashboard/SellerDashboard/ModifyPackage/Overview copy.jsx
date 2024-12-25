import styled from "styled-components";

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 53rem;
  box-shadow: 2px 2px 6px 0px #00000040, -2px -2px 4px 0px #00000040;
  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 12px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
  /* margin-bottom: 10px; */
  letter-spacing: 1px;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: black;
  margin-bottom: 5px;
  letter-spacing: 1px;
`;

const ContentContainer = styled.div`
  flex: 1;
  position: relative;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const EditButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #2a93d5;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 5rem;
  font-size: 2rem;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    background-color: #237ab8;
  }
`;

function Overview() {
  return (
    <OverviewContainer>
      <Title>Best Tea Plantation of South India - Coorg (3N-2D) Package</Title>
      <Subtitle>Price : $250 Per person</Subtitle>
      <ContentContainer>
        <Image src="/package-bg.jpeg" alt="Coorg Package" />
        <EditButton>Edit</EditButton>
      </ContentContainer>
    </OverviewContainer>
  );
}

export default Overview;
