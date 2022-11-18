import React from "react";
import LogoMedata from "../../medatatheme/assets/images/logo.png";
import LogoAlcaldia from "../../medatatheme/assets/images/logo-alcaldia.png";
import IconoSearch from "../../medatatheme/assets/icons/search.png";
import Menu from "./menu"

const Header = ({
  headerClass = 'header'
}) => {
  const [headerComplement, setHeaderComplement] = React.useState('');

  React.useState(() => {
    if (headerClass === 'header') {
      setHeaderComplement (
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
        <a href="/" className="logo">
          <img src={LogoMedata} alt="Logo MeData" />
        </a>
        <div className="burger" id="burger">
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
        <div className="menu" id="menu">
          <Menu />
          <a href="/search" className="brand">
            <img className="search" src={IconoSearch} alt="Search" />
          </a>
          <a href="https://www.medellin.gov.co/" className="brand">
            <img src={LogoAlcaldia} alt="Logo alcaldía de Medellín" />
          </a>
        </div>
      </nav>
      { headerComplement }
    </header>
  );
};

export default Header;
