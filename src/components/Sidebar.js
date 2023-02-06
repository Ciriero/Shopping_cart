import React from "react";
import { menu } from "../data/menu";
import { LibraryContainer } from "../styles/Sidebar.styles";

const Sidebar = () => {
  return (
    <LibraryContainer isOpen={isOpen}>
      {menu.map((item) => (
        <a href="">{item.title}</a>
      ))}
    </LibraryContainer>
  );
};

export default Sidebar;
