import React from 'react'
import { menu } from '../data/menu';
import logo from "../images/logo.png"
import { NavContainer } from '../styles/Navbar.styles';

const Navbar = () => {

  return (
    <>
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <img
            src={logo}
            className="logo"
            alt="Biblioteca de Carfax"
          />
          <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
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
          <button className="btn-shp">
            <FaShoppingCart />
            <p className="numero">3</p>
          </button>
        </div>
      </div>
    </NavContainer>
  </>
  )
}

export default Navbar