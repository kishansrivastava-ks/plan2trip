/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
import TourPackageItem from "./TourPackageItem";

const Container = styled.div`
  width: 90%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.div`
  width: 100%;
  height: 30rem;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #333;
  border: 1px solid #ddd;
  margin-bottom: 1rem;
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 2rem;
`;

const PageNumber = styled.button`
  background: ${({ active }) =>
    active ? "linear-gradient(180deg, #159dd1 72.54%, #1286ba 100%)" : "#fff"};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  border: 1px solid #ccc;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background: linear-gradient(180deg, #159dd1 72.54%, #1286ba 100%);
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

const ArrowButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background: linear-gradient(180deg, #159dd1 72.54%, #1286ba 100%);
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

const itemsData = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  content: `Item ${i + 1}`,
}));

const Packages = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(itemsData.length / itemsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = itemsData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Container>
      {currentItems.map((item) => (
        // <Item key={item.id}>{item.content}</Item>
        <TourPackageItem key={item.id} />
      ))}
      <Pagination>
        <ArrowButton onClick={handlePrev}>&lt;</ArrowButton>
        {Array.from(
          { length: Math.ceil(itemsData.length / itemsPerPage) },
          (_, i) => (
            <PageNumber
              key={i + 1}
              active={currentPage === i + 1}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </PageNumber>
          )
        )}
        <ArrowButton onClick={handleNext}>&gt;</ArrowButton>
      </Pagination>
    </Container>
  );
};

export default Packages;
