import styled from "styled-components";
import AvbQty from "../../components/Dashboard/SellerDashboard/AddPackage/AvbQty";
import AddPkgItinerary from "../../components/Dashboard/SellerDashboard/AddPackage/AddPkgItinerary";
import AddPkgInclusion from "../../components/Dashboard/SellerDashboard/AddPackage/AddPkgInclusion";
import AddPkgHighlights from "../../components/Dashboard/SellerDashboard/AddPackage/AddPkgHighlights";
import AddPkgStay from "../../components/Dashboard/SellerDashboard/AddPackage/AddPkgStay";
import TravellersAndPrice from "../../components/Dashboard/SellerDashboard/AddPackage/TravellersAndPrice";

const MOBILE_BREAKPOINT = "768px";

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

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 0 0.5rem;
    height: auto;
    min-height: 60rem;
  }
`;
const Header = styled.div`
  padding-bottom: 1rem;
  border-bottom: 2px solid #cccc;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 2rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 1.8rem;
    padding-bottom: 0.8rem;
    margin-bottom: 1.5rem;
  }
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

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    gap: 0.5rem;

    & > p {
      flex-basis: auto;
      font-size: 1.8rem;
    }

    & > input {
      flex-basis: auto;
      width: 100%;
      padding: 0.6rem 1rem;
    }
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

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin: 1.5rem 0;
    font-size: 1.8rem;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    gap: 8px;
  }
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

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-right: 0;
    font-size: 1.6rem;

    input {
      transform: scale(1.1);
    }
  }
`;

const SaveButtonContainer = styled.div`
  width: 100%;
  /* border: 1px solid red;  */
  margin: 3rem 0;
  margin-bottom: 5rem;
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin: 2rem 0 4rem 0;
    padding-right: 0;
  }
`;
const SaveBtn = styled.button`
  background-color: #2a93d5;
  color: white;
  border: none;
  padding: 0.6rem 3.5rem;
  font-size: 1.8rem;
  letter-spacing: 1px;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: #237ab8;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    padding: 0.8rem 0;
    font-size: 1.6rem;
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
              <input type="radio" name="priceType" value="fixed" />
              Fixed Price
            </RadioButton>
            <RadioButton>
              <input type="radio" name="priceType" value="variable" />
              Variable Price
            </RadioButton>
          </RadioGroup>
        </span>
      </PriceMatrix>
      <TravellersAndPrice />
      <AvbQty />
      <AddPkgItinerary />
      <AddPkgInclusion />
      <AddPkgHighlights />
      <AddPkgStay />
      <SaveButtonContainer>
        <SaveBtn>Save Changes</SaveBtn>
      </SaveButtonContainer>
    </Container>
  );
}

export default AddPackage;
