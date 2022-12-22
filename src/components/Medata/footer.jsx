import React from "react";
import LogoMedata from "../../medatatheme/assets/images/logo.png";
import LogoAlcaldia from "../../medatatheme/assets/images/logo-alcaldia.png";
import LogoCo from "../../medatatheme/assets/images/logo-co.png";
import LogoGov from "../../medatatheme/assets/images/logo-gov.png";

const Header = () => {
  return (
    <section className="contact-section">
      <div className="container-home">
        <div className="grid">
          <div className="contact-containers">
            <p className="contact-title">Links de interés</p>
            <hr className="contact-separator" />
              <ul className="contact-list">
                <li className="contact-item">
                  <span className="contact-decorator"></span>
                  <a href="https://www.medellin.gov.co/" className="contact-link">Portal Alcaldia de Medellín</a>
                </li>
                <li className="contact-item">
                  <span className="contact-decorator"></span>
                  <a href="https://www.rutanmedellin.org/" className="contact-link">Página Corporación Ruta N</a>
                </li>
                <li className="contact-item">
                  <span className="contact-decorator"></span>
                  <a href="https://www.datos.gov.co/" className="contact-link">Portal Datos Abiertos Colombia</a>
                </li>
              </ul>
          </div>
          <div className="contact-containers">
            <p className="contact-title">Contacto</p>
            <hr className="contact-separator" />
              <ul className="contact-list">
                <li className="contact-item">
                  <span className="contact-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <a href="#!" className="contact-link">Calle 44 N 52 – 165 Centro Administrativo la Alpujarra
                    – Medellín, Colombia.</a>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <a href="mailto:medata@medellin.gov.co" className="contact-link">medata@medellin.gov.co</a>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <a href="tel:+5744444144" className="contact-link">Línea única de atención ciudadana: (574) 44 44 144</a>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">
                    <i className="fa-solid fa-headset"></i>
                  </span>
                  <a href="tel:018000411144" className="contact-link">Línea gratuita nacional: 01 8000 411 144</a>
                </li>
              </ul>
          </div>
          <div
            className="contact-containers contact-social-container d-flex justify-content-center align-items-center">
            <a href="/" className="logo">
              <img src={LogoMedata} alt="Logo MeData" />
            </a>
            <p className="text text-white text-center">
              MEData es la estrategia de datos de la ciudad de Medellín, que busca la apropiación,
              apertura y uso de los datos como herramienta de gobierno, acción ciudadana y toma de
              decisiones.
            </p>
          </div>
        </div>
        <div className="contact-privacity d-flex align-items-center justify-content-center">
          <p className="text text-white">Copyright © Medata 2022 ® todos los derechos reservados</p>
          <p className="text text-secondary"><a href="https://www.medellin.gov.co/es/transparencia/politica-de-tratamientos-de-datos/">Condiciones de Uso</a></p>
          <p className="text text-secondary"><a href="https://www.medellin.gov.co/es/transparencia/politica-de-tratamientos-de-datos/">Políticas de Privacidad</a></p>
        </div>
      </div>
      <div className="footer">
        <div className="footer-container">
          <a href="https://www.medellin.gov.co/" className="footer-brand">
            <img src={LogoAlcaldia} alt="Logo alcaldía de Medellín" />
          </a>
          <div className="footer-logos">
            <a href="/" className="footer-brand">
              <img src={LogoCo} alt="Logo Co" />
            </a>
            <a href="/" className="footer-brand">
              <img src={LogoGov} alt="Logo gobernación" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
