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

const BoldLine = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  gap: 2rem;
  align-items: center;
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
  align-items: center;
  gap: 10px;
  & > * {
    margin-right: 1rem;
  }
`;

const SeparateDatesContainer = styled(CalendarContainer)`
  display: inline-block;
`;

const AvbQty = () => {
  const [dateType, setDateType] = useState("range");
  const [rangeStart, setRangeStart] = useState("");
  const [rangeEnd, setRangeEnd] = useState("");

  const [numDates, setNumDates] = useState(0);
  const [selectedDates, setSelectedDates] = useState([]);

  const handleRangeEnd = (e) => {
    const endDate = e.target.value;
    setRangeEnd(endDate);

    if (rangeStart && endDate && isValidDateRange(rangeStart, endDate)) {
      setRangeStart("");
      setRangeEnd("");
    }
  };

  const isValidDateRange = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    if (
      startDate.toString() === "Invalid Date" ||
      endDate.toString() === "Invalid Date"
    ) {
      return false;
    }

    return endDate >= startDate;
  };

  // Rest of your component remains the same...
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
      setNumDates(0);
      setSelectedDates([]);
    }
  };

  return (
    <Container>
      <Title>Availability and Quantity</Title>
      <Columns>
        <Column>
          <BoldLine>
            Available Dates:
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
          <BoldLine>
            Available Quantity:
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Input type="number" min="1" placeholder="Enter Quantity" />
              <span>Packages</span>
            </div>
          </BoldLine>
        </Column>
      </Columns>
    </Container>
  );
};

export default AvbQty;
