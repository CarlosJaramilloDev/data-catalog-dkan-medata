import React from "react";
import axios from 'axios';
import LogoMedata from "../../medatatheme/assets/images/logo.png";
import LogoAlcaldiaVertical from "../../medatatheme/assets/images/logo-alcaldia-vertical.png";
import Menu from "./menu"

const Header = ({
  headerClass = 'header'
}) => {
  const [headerComplement, setHeaderComplement] = React.useState('');
  const [datasetsL, setDatasetsL] = React.useState(null);

  React.useEffect(() => {
    async function getDatasets() {
      const { data } = await axios.get(`${process.env.REACT_APP_ROOT_URL}/metastore/schemas/dataset/items?show-reference-ids`)
      setDatasetsL(data.length);
    }

    if (datasetsL === null) {
      getDatasets()
    }

    if (headerClass === 'header') {
      setHeaderComplement(
        <div>
          <p className="header-text text-center">
            Consulta y accede a más de <b> {datasetsL} conjunto(s) de datos en línea </b>
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
  }, [datasetsL, headerClass]);

  return (
    <header className={headerClass} id="header">
      <nav className="navbar container-home">
        <div className="logos">
          <a href="https://www.medellin.gov.co/" className="brand">
            <img src={LogoAlcaldiaVertical} alt="Logo alcaldía de Medellín" />
          </a>
          <a href="/" className="logo">
            <img src={LogoMedata} alt="Logo MeData" />
          </a>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className='menu-button-container' htmlFor="menu-toggle"></label>
        <div className="burger" id="burger">
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
        <div className="menu" id="menu">
          <div className="menu-container">
            <div className="logos-mobile">
              <a href="https://www.medellin.gov.co/" className="brand">
                <img src={LogoAlcaldiaVertical} alt="Logo alcaldía de Medellín" />
              </a>
              <a href="/" className="logo">
                <img src={LogoMedata} alt="Logo MeData" />
              </a>
            </div>
            <Menu />
          </div>
        </div>
      </nav>
      {headerComplement}
    </header>
  );
};

export default Header;
