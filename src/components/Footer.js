import React from "react";
import { FooterContainer } from "../styles/Footer.styles";
import { FaShoppingCart, FaUserAlt, FaGift, FaBook } from "react-icons/fa";
import { useGlobalContext } from "../context/context";

const Footer = () => {
  const { amount } = useGlobalContext();
  return (
    <FooterContainer>
      <div>
        <FaBook />
      </div>
      <div>
        <FaGift />
      </div>
      <div>
        <FaUserAlt />
      </div>
      <div className="number-container">
        <span className="number">{amount}</span>
        <FaShoppingCart />
      </div>
    </FooterContainer>
  );
};

export default Footer;
