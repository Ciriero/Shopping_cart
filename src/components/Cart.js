import React from "react";
import books from "../data/books";
import CartItem from "./CartItem";
import { CartContainer, ButtonRmv } from "../styles/Cart.styles";

const Cart = () => {
  return (
    <CartContainer>
      <h2>TUS LIBROS</h2>
        {books.map((item) => (
          <CartItem key={item} {...item} />
        ))}
        <hr />
        <div className="total">
          <h3>
            Total
            <span>$2</span>
          </h3>
        <ButtonRmv>eliminar</ButtonRmv>
      </div>
    </CartContainer>
  );
};

export default Cart;
