import styled from "styled-components";
import AvbQty from "../../components/Dashboard/SellerDashboard/AddPackage/AvbQty";
import AddPkgItinerary from "../../components/Dashboard/SellerDashboard/AddPackage/AddPkgItinerary";

const Container = styled.div`
  /* border: 1px solid red; */
  & > * {
    color: #000;
  }
  padding: 0 1rem;
  height: 60rem;
  &::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #2a93d5 transparent;
`;
const Header = styled.div`
  padding-bottom: 1rem;
  border-bottom: 2px solid #cccc;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 2rem;
`;

const Name = styled.div`
  /* border: 1px solid red; */
  display: flex;
  gap: 1rem;
  align-items: center;
  & > p {
    flex-basis: 18%;
    font-size: 2rem;
    letter-spacing: 1px;
  }
  & > input {
    flex-basis: 82%;
    border-radius: 5px;
    border: 2px solid #cccc;
    padding: 0.8rem 1rem;
  }
`;

const PriceMatrix = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  margin: 2rem 0;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const RadioButton = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-right: 2rem;

  input {
    accent-color: black;
    transform: scale(1.2);
  }
`;
function AddPackage() {
  return (
    <Container>
      <Header>Add Package</Header>
      <Name>
        <p>Name of Package : </p>
        <input type="text" placeholder="Enter package name" />
      </Name>
      <PriceMatrix>
        <span>Price Matrix</span>
        <span>
          <RadioGroup>
            <RadioButton>
              <input type="radio" value="range" />
              Range of Dates
            </RadioButton>
            <RadioButton>
              <input type="radio" name="dateType" value="separate" />
              Separate Dates
            </RadioButton>
          </RadioGroup>
        </span>
      </PriceMatrix>
      <AvbQty />
      <AddPkgItinerary />
    </Container>
  );
}

export default AddPackage;
