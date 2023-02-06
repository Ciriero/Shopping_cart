import React from "react";
import { FooterContainer } from "../styles/Footer.styles";
import { FaShoppingCart, FaUserAlt, FaGift, FaBook } from "react-icons/fa";

const Footer = () => {
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
        <span className="number">3</span>
        <FaShoppingCart />
      </div>
    </FooterContainer>
  );
};

export default Footer;
