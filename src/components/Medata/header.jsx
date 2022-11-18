import React from "react";
import LogoMedata from "../../medatatheme/assets/images/logo.png";
import LogoAlcaldia from "../../medatatheme/assets/images/logo-alcaldia.png";
import IconoSearch from "../../medatatheme/assets/icons/search.png";
import Menu from "./menu"

const Header = () => {
  return (
    <header class="header" id="header">
      <nav class="navbar container-home">
        <a href="/" class="logo">
          <img src={LogoMedata} alt="Logo MeData" />
        </a>
        <div class="burger" id="burger">
          <span class="burger-line"></span>
          <span class="burger-line"></span>
          <span class="burger-line"></span>
        </div>
        <div class="menu" id="menu">
         <Menu />
          <a href="/search" class="brand">
            <img class="search" src={IconoSearch} alt="Search" />
          </a>
          <a href="https://www.medellin.gov.co/" class="brand">
            <img src={LogoAlcaldia} alt="Logo alcaldía de Medellín" />
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
