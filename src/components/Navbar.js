import React from "react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { menu } from "../data/menu";
import logo from "../images/logo.jpg";
import { NavCenter, NavContainer } from "../styles/Navbar.styles";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavContainer>
        <NavCenter>
          <div className="nav-header">
            <img src="https://labibliotecadecarfax.com/wp-content/uploads/2021/09/logo-horizontal.png" alt="Carfax" className="logo" />
            <button className="nav-btn" onClick={() => setIsOpen(!isOpen)}>
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
          <div className="shop">
            <FaShoppingCart />
            <p className="numero">3</p>
          </div>
        </NavCenter>
      </NavContainer>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
