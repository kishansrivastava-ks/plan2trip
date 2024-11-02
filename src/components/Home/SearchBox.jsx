import { useState } from "react";
import styled from "styled-components";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  background-color: white;
  padding: 3rem 4rem;
  border-radius: 20px;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.3);
  max-width: 700px;
  margin: 0 auto;
`;

const InputContainer = styled.div`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  padding: 0 1rem;
  flex: 1;
  position: relative;
  /* margin-top: 1rem; */

  & + &::before {
    content: "";
    position: absolute;
    left: 0;
    height: 60%;
    width: 1px;
    background-color: #ccc;
  }
  border-right: 1px solid gray;
`;

const Icon = styled.div`
  color: #666;
  font-size: 2.5rem;
  margin-right: 1.5rem;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 2rem;
  width: 100%;
  padding: 0.5rem;
  color: #333;
  margin-top: -0.7rem;
  margin-left: -1rem;

  &::placeholder {
    color: #747373;
    /* color: #000; */
    font-size: 1.8rem;
    /* letter-spacing: 1px; */
  }
  &:active {
    outline: none;
    border: none;
  }
`;

const DateInputContainer = styled.div`
  flex: 1;
  position: relative;
  font-size: 2rem;
  .react-datepicker-wrapper {
    width: 100%;
    border: none;
  }
  display: flex;
  .datepicker-input {
    border: none;
    outline: none;
    font-size: 2rem;
    /* border: 1px solid red; */
  }
`;

const SearchButton = styled.button`
  background-color: #159fd3;
  color: white;
  padding: 0.5rem 2.5rem;
  /* font-size: 1rem; */
  /* font-weight: bold; */
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: darkblue;
  }
`;

function SearchBox() {
  const [startDate, setStartDate] = useState(null);

  return (
    <SearchContainer>
      <InputContainer>
        <Icon>
          <FaMapMarkerAlt />
        </Icon>
        <Input type="text" placeholder="Where To?" />
      </InputContainer>

      <DateInputContainer>
        <InputContainer>
          <Icon>
            <FaCalendarAlt />
          </Icon>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="When?"
            dateFormat="dd/MM/yyyy"
            className="datepicker-input"
          />
        </InputContainer>
      </DateInputContainer>

      <SearchButton>Search</SearchButton>
    </SearchContainer>
  );
}

export default SearchBox;
