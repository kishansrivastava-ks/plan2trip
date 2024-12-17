/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const Container = styled.div`
  width: 90%;
  margin: 5rem auto;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #333333;
    border-radius: 16px;
    border: 4px solid transparent;
    background-clip: padding-box;
  }
`;

const Item = styled.div`
  width: 100%;
  height: 10rem;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #444;
  border: 1px solid #ddd;
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

// Dummy data for cart items
const cartItems = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Cart Item ${i + 1}`,
  price: `$${(Math.random() * 100).toFixed(2)}`,
}));

const CartPage = () => {
  const [currentItems, setCurrentItems] = useState(cartItems);
  return (
    <Container>
      {currentItems.map((item) => (
        <CartItem key={item.id} />
      ))}
    </Container>
  );
};

export default CartPage;
