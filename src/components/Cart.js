import React from "react";
import books from "../data/books";
import CartItem from "./CartItem";
import { CartContainer, ButtonRmv } from "../styles/Cart.styles";
import { useGlobalContext } from "../context/context";

const Cart = () => {
  const { cart, total, deleleteAllBooks } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <CartContainer>
        <h2>TUS LIBROS</h2>
        <h4 className="empty">Tu cesta está vacía</h4>
      </CartContainer>
    );
  }
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
          <span>${total}</span>
        </h3>
        <ButtonRmv onClick={deleleteAllBooks}>vaciar carrito</ButtonRmv>
      </div>
    </CartContainer>
  );
};

export default Cart;
