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

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
    width: 90%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  flex: 1;
  position: relative;
  border-right: 1px solid gray;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ccc;
    padding: 0.5rem 0;
  }

  & + &::before {
    content: "";
    position: absolute;
    left: 0;
    height: 60%;
    width: 1px;
    background-color: #ccc;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const Icon = styled.div`
  color: #666;
  font-size: 2.5rem;
  margin-right: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-right: 1rem;
  }
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

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 0;
    margin-left: 0;
  }

  &::placeholder {
    color: #747373;
    font-size: 1.8rem;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
`;

const DateInputContainer = styled.div`
  flex: 1;
  position: relative;
  font-size: 2rem;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
  }

  .react-datepicker-wrapper {
    width: 100%;
    border: none;
  }

  .datepicker-input {
    border: none;
    outline: none;
    font-size: 2rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

const SearchButton = styled.button`
  background-color: #159fd3;
  color: white;
  padding: 0.5rem 2.5rem;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;
  }

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
