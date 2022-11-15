import React from "react";
import links from "../../assets/menu.json";

const Menu = () => {
  const menuItems = links.main.map((item, index) => {
    return (<li class="menu-item" key={index}>
      <a href={item.url} class="menu-link">
        {item.label}
      </a>
  </li>)
  });
  
  return (
    <ul class="menu-inner">
      { menuItems }
    </ul>
  );
};

export default Menu;
