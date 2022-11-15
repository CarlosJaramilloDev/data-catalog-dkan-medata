import React from "react";
import Helmet from "react-helmet";
import { Link } from "@reach/router";
import { NavBar, Footer } from "@civicactions/data-catalog-components";
import config from "../../assets/config.json";
import links from "../../assets/menu.json";
import logoMedata from "../../medatatheme/assets/images/logo.png";
import logoAlcaldia from "../../medatatheme/assets/images/logo-alcaldia.png";
import iconoSearch from "../../medatatheme/assets/icons/search.png";

const Header = () => {
  const menuItems = links.main.map((item, index) => {
    return (<li class="menu-item" key={index}>
      <a href={item.url} class="menu-link">
        {item.label}
      </a>
  </li>)
  })
  return (
    <header class="header" id="header">
      <nav class="navbar container-home">
        <a href="/" class="logo">
          <img src={logoMedata} alt="Logo MeData" />
        </a>
        <div class="burger" id="burger">
          <span class="burger-line"></span>
          <span class="burger-line"></span>
          <span class="burger-line"></span>
        </div>
        <div class="menu" id="menu">
          <ul class="menu-inner">
            { menuItems }
          </ul>
          <a href="/search" class="brand">
            <img class="search" src={iconoSearch} alt="Search" />
          </a>
          <a href="https://www.medellin.gov.co/" class="brand">
            <img src={logoAlcaldia} alt="Logo alcaldía de Medellín" />
          </a>
        </div>
      </nav>
      <p class="header-text text-center">
        Consulta y accede a más de <b> 532 conjunto de datos en línea </b>
      </p>
      <div class="search-wrapper">
        <form action="/search" method="get">
          <input
            type="text"
            placeholder="¿Qué deseas buscar? Ej: Parque automotor"
            class="search-input"
            name="fulltext"
          />
          <button class="search-button">Buscar</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
