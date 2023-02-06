import React from "react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { menu } from "../data/menu";
import logo from "../images/logo.jpg";
import { NavCenter, NavContainer } from "../styles/Navbar.styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavContainer>
        <NavCenter>
          <div className="nav-header">
            <img src={logo} alt="Carfax" className="logo"/>
            <button className="nav-btn">
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            {menu.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </NavCenter>
      </NavContainer>
    </>
  );
};

export default Navbar;
