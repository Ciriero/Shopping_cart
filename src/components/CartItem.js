import React from "react";
import { CartItems, BtnAmount } from "../styles/Cart.styles";
import {AiOutlineCloseCircle} from "react-icons/ai"

const CartItem = ({title, author, price, img, amount}) => {
  return (
    <CartItems>
      <div className="image">
        <img src={img} alt="libro" />
        <div>
          <p className="title">{title}</p>
          <p className="author">{author}</p>
          <p className="price">{price}</p>
          <button className="delete"> 
          <AiOutlineCloseCircle />
          </button>
        </div>
      </div>
      <div>
        <BtnAmount className="amount-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </BtnAmount>
        <p className="amount-p">{amount}</p>

        <BtnAmount className="amount-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </BtnAmount>
      </div>
    </CartItems>
  );
};

export default CartItem;
