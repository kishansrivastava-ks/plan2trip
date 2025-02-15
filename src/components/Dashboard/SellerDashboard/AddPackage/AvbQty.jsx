import { useState } from "react";
import styled from "styled-components";

const MOBILE_BREAKPOINT = "768px";

const Container = styled.div`
  box-shadow: 2px 2px 6px 0px #00000040, -2px -2px 4px 0px #00000040;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  margin-top: 3rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 15px;
    margin-top: 2rem;
    box-shadow: none;
    border-bottom: 1px solid black;
    border-radius: 0;
    padding-bottom: 4rem;
  }
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

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 2rem;
    margin-bottom: 15px;
  }
`;

const Columns = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    gap: 25px;
  }
`;

const Column = styled.div`
  flex: 1;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
  }
`;

const Divider = styled.div`
  width: 1px;
  background: #ddd;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`;
const BoldLine = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 1.6rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
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

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 8px;
    width: 100%;
  }
`;

const CalendarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & > * {
    margin-right: 1rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    align-items: stretch;
    gap: 15px;
    margin-top: 10px;

    & > * {
      margin-right: 0;
    }

    & > span {
      display: none;
    }
  }
`;

const SeparateDatesContainer = styled(CalendarContainer)`
  display: inline-block;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;
    margin-top: 10px;

    & > input {
      width: 100%;
    }
  }
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
            {/* <div style={{ display: "flex", alignItems: "center", gap: "10px" }}> */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                "@media (max-width: 768px)": {
                  width: "100%",
                  marginTop: "10px",
                },
              }}
            >
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
