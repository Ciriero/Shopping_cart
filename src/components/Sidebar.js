import React from "react";
import { FaTimes } from "react-icons/fa";
import { menu } from "../data/menu";
import { BtnClose, LibraryContainer } from "../styles/Sidebar.styles";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <LibraryContainer isOpen={isOpen}>
      <BtnClose onClick={() => setIsOpen(!isOpen)}>
        <FaTimes />
      </BtnClose>
      <ul className="side-items">
        {menu.map((item) => (
          <li key={item.id}>
            <a href="#" onClick={() => setIsOpen(!isOpen)}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </LibraryContainer>
  );
};

export default Sidebar;
