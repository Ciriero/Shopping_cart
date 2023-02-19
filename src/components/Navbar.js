import React from "react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { menu } from "../data/menu";
import logo from "../images/logo.png";
import { NavCenter, NavContainer } from "../styles/Navbar.styles";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useGlobalContext } from "../context/context";

const Navbar = () => {
  const {amount} = useGlobalContext()
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavContainer>
        <NavCenter>
          <div className="nav-header">
            <img src={logo}alt="Carfax" className="logo" />
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
            <p className="numero">{amount}</p>
          </div>
        </NavCenter>
      </NavContainer>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Footer />
    </>
  );
};

export default Navbar;
