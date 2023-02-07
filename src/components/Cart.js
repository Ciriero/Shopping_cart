import React from "react";
import books from "../data/books";
import CartItem from "./CartItem";
import { CartContainer, ButtonRmv } from "../styles/Cart.styles";

const Cart = () => {
  return (
    <CartContainer>
      <h2>YOUR BOOKS</h2>
      <div>
        {books.map((item) => (
          <CartItem key={item} {...item} />
        ))}
      </div>
      <div>
        <hr />
        <div className="total">
          <h3>
            Total
            <span>$2</span>
          </h3>
        </div>
        <ButtonRmv>remove</ButtonRmv>
      </div>
    </CartContainer>
  );
};

export default Cart;
