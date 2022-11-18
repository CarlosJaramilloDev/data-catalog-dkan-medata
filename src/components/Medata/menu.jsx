import React from "react";
import links from "../../assets/menu.json";

const Menu = () => {
  const menuItems = links.main.map((item, index) => {
    return (<li className="menu-item" key={index}>
      <a href={item.url} className="menu-link">
        {item.label}
      </a>
  </li>)
  });
  
  return (
    <ul className="menu-inner">
      { menuItems }
    </ul>
  );
};

export default Menu;
