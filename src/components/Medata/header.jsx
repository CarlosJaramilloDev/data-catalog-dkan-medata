import React from "react";
import LogoMedata from "../../medatatheme/assets/images/logo.png";
import LogoAlcaldiaVertical from "../../medatatheme/assets/images/logo-alcaldia-vertical.png";
import Menu from "./menu"

const Header = ({
  headerClass = 'header'
}) => {
  const [headerComplement, setHeaderComplement] = React.useState('');

  React.useState(() => {
    if (headerClass === 'header') {
      setHeaderComplement(
        <div>
          <p className="header-text text-center">
            Consulta y accede a más de <b> 532 conjunto de datos en línea </b>
          </p>
          <div className="search-wrapper">
            <form action="/search" method="get">
              <input
                type="text"
                placeholder="¿Qué deseas buscar? Ej: Parque automotor"
                className="search-input"
                name="fulltext"
              />
              <button className="search-button">Buscar</button>
            </form>
          </div>
        </div>);
    }
  });

  return (
    <header className={headerClass} id="header">
      <nav className="navbar container-home">
        <div class="logos">
          <a href="https://www.medellin.gov.co/" class="brand">
            <img src={LogoAlcaldiaVertical} alt="Logo alcaldía de Medellín" />
          </a>
          <a href="/" class="logo">
            <img src={LogoMedata} alt="Logo MeData" />
          </a>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle"></label>
        <div class="burger" id="burger">
          <span class="burger-line"></span>
          <span class="burger-line"></span>
          <span class="burger-line"></span>
        </div>
        <div className="menu" id="menu">
          <Menu />
        </div>
      </nav>
      {headerComplement}
    </header>
  );
};

export default Header;
