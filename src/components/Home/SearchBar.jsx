import { useState } from "react";
import styled from "styled-components";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 50px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  max-width: 70vw;
  margin: 20px auto;
  overflow: hidden;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex: 1;
  border-right: 1px solid #ddd;
  padding: 0 15px;

  &:last-of-type {
    border-right: none;
  }
`;

const IconWrapper = styled.div`
  margin-right: 8px;
  color: #1562b2;
  font-size: 2.5rem;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 18px;
  width: 100%;
  color: #0c0908;
  /* outline: none; */

  &::placeholder {
    color: #aaa;
  }
  &:focus {
    outline: none;
    border: none;
  }
`;

const Dropdown = styled.select`
  border: none;
  outline: none;
  font-size: 1.8rem;
  width: 100%;
  background-color: transparent;
  color: #b0b0b0;
  padding: 1rem;

  &:focus {
    outline: none;
    border: none;
  }
`;

const SearchButton = styled.button`
  background-color: #052e5a;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 1.5rem 3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #104a8e;
  }
`;

const CustomDatePicker = styled(DatePicker)`
  border: none;
  outline: none;
  font-size: 18px;
  width: 100%;
  color: #0c0908;
  background-color: transparent;
  padding: 10px;

  &:focus {
    outline: none;
  }
`;

const CalendarContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  font-size: 12px;
  padding: 10px;

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: #1562b2;
    color: #fff;
    border-radius: 50%;
    /* margin: 1rem; */
  }

  .react-datepicker__day:hover {
    background-color: #f0f0f0;
    border-radius: 50%;
  }
`;

function SearchBar() {
  const [startDate, setStartDate] = useState(null);

  return (
    <SearchContainer>
      <SearchBox>
        <IconWrapper>
          <FaMapMarkerAlt />
        </IconWrapper>
        <Input type="text" placeholder="Where to?" />
      </SearchBox>

      <SearchBox>
        <IconWrapper>
          <FaCalendarAlt />
        </IconWrapper>
        <CustomDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="When?"
          calendarContainer={CalendarContainer}
        />
      </SearchBox>

      <SearchBox>
        <IconWrapper>
          <FaUser />
        </IconWrapper>
        <Dropdown>
          <option value="">Type</option>
          <option value="adventure">Adventure</option>
          <option value="beach">Beach</option>
          <option value="cruise">Cruise</option>
          <option value="family">Family</option>
          <option value="romantic">Romantic</option>
        </Dropdown>
      </SearchBox>

      <SearchButton>
        <FaSearch style={{ marginRight: "8px" }} />
        Search
      </SearchButton>
    </SearchContainer>
  );
}

export default SearchBar;
