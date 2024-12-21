import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  box-shadow: 2px 2px 6px 0px #00000040, -2px -2px 4px 0px #00000040;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  margin-top: 3rem;
`;

const Title = styled.h3`
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 20px;

  &::before {
    content: "\u2022";
    color: black;
    font-size: 2rem;
    margin-right: 10px;
  }
`;

const Columns = styled.div`
  display: flex;
  gap: 20px;
`;

const Column = styled.div`
  flex: 1;
`;

const Divider = styled.div`
  width: 1px;
  background: #ddd;
`;

const Line = styled.div`
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const BoldLine = styled(Line)`
  font-weight: bold;
  display: flex;
  gap: 2rem;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const RadioButton = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.6rem;
  cursor: pointer;

  input {
    accent-color: black;
    transform: scale(1.2);
  }
`;

const Input = styled.input`
  padding: 5px;
  font-size: 1.6rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const CalendarContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  /* justify-content: space-between; */
  gap: 10px;
  & > * {
    margin-right: 1rem;
  }
`;

const SeparateDatesContainer = styled(CalendarContainer)`
  display: inline-block;
`;

const AvailabilityQuantity = () => {
  const [currentDates, setCurrentDates] = useState(
    "30-12-24 / 01-01-25 / 05-01-25 / 07-01-25 / "
  );
  const [currentQuantity, setCurrentQuantity] = useState(28);

  const [dateType, setDateType] = useState("range");
  const [rangeStart, setRangeStart] = useState("");
  const [rangeEnd, setRangeEnd] = useState("");

  const [numDates, setNumDates] = useState(0);
  const [selectedDates, setSelectedDates] = useState([]);

  const handleRangeEnd = (e) => {
    setRangeEnd(e.target.value);
    if (rangeStart && e.target.value) {
      setCurrentDates(`${rangeStart} to ${e.target.value}`);
      setRangeStart("");
      setRangeEnd("");
    }
  };

  const handleNumDatesChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setNumDates(num);
    setSelectedDates(Array(num).fill(""));
  };

  const handleDateSelection = (index, date) => {
    const updatedDates = [...selectedDates];
    updatedDates[index] = date;
    setSelectedDates(updatedDates);

    if (updatedDates.every((d) => d !== "")) {
      setCurrentDates(updatedDates.join(" / ") + " / ");
      setNumDates(0);
      setSelectedDates([]);
    }
  };

  const handleQuantityChange = (e) => {
    if (e.key === "Enter") {
      setCurrentQuantity(e.target.value);
    }
  };

  return (
    <Container>
      <Title>Availability and Quantity</Title>
      <Columns>
        <Column>
          <Line>Current Dates: {currentDates}</Line>
          <BoldLine>
            Available Dates:{" "}
            <span>
              <RadioGroup>
                <RadioButton>
                  <input
                    type="radio"
                    name="dateType"
                    value="range"
                    checked={dateType === "range"}
                    onChange={() => setDateType("range")}
                  />
                  Range of Dates
                </RadioButton>
                <RadioButton>
                  <input
                    type="radio"
                    name="dateType"
                    value="separate"
                    checked={dateType === "separate"}
                    onChange={() => setDateType("separate")}
                  />
                  Separate Dates
                </RadioButton>
              </RadioGroup>
            </span>
          </BoldLine>

          {dateType === "range" && (
            <CalendarContainer>
              <Input
                type="date"
                value={rangeStart}
                onChange={(e) => setRangeStart(e.target.value)}
                placeholder="Start Date"
              />
              <span>to</span>
              <Input
                type="date"
                value={rangeEnd}
                onChange={handleRangeEnd}
                placeholder="End Date"
              />
            </CalendarContainer>
          )}
          {dateType === "separate" && (
            <SeparateDatesContainer className="separate_dates">
              <Input
                type="number"
                min="1"
                value={numDates}
                onChange={handleNumDatesChange}
                placeholder="Number of Dates"
              />
              {selectedDates.map((_, index) => (
                <Input
                  key={index}
                  type="date"
                  onChange={(e) => handleDateSelection(index, e.target.value)}
                />
              ))}
            </SeparateDatesContainer>
          )}
        </Column>
        <Divider />
        <Column>
          <Line>Current Quantity: {currentQuantity} Packages</Line>
          <BoldLine>Available Quantity:</BoldLine>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Input
              type="number"
              min="1"
              onKeyPress={handleQuantityChange}
              placeholder="Enter Quantity"
            />
            <span>Packages</span>
          </div>
        </Column>
      </Columns>
    </Container>
  );
};

export default AvailabilityQuantity;
