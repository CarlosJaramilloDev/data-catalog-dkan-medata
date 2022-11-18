import React from "react";
import LogoFacebook from "../../medatatheme/assets/icons/social-network/facebook.png";
import LogoTwitter from "../../medatatheme/assets/icons/social-network/twitter.png";
import LogoInstagram from "../../medatatheme/assets/icons/social-network/instagram.png";
import LogoYoutube from "../../medatatheme/assets/icons/social-network/youtube.png";
import ImagenFondo from '../../medatatheme/assets/images/item.png';
import LogoMedata from "../../medatatheme/assets/images/logo.png";

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
                  <a href="#" className="contact-link">Portal Alcaldia de Medellín</a>
                </li>
                <li className="contact-item">
                  <span className="contact-decorator"></span>
                  <a href="#" className="contact-link">Página Corporación Ruta N</a>
                </li>
                <li className="contact-item">
                  <span className="contact-decorator"></span>
                  <a href="#" className="contact-link">Portal Datos Abiertos Colombia</a>
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
                  <a href="#" className="contact-link">Calle 44 N 52 – 165 Centro Administrativo la Alpujarra – Medellín, Colombia.</a>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <a href="#" className="contact-link">medata@medellin.gov.co</a>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <a href="#" className="contact-link">Línea única de atención ciudadana: (574) 44 44 144</a>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">
                    <i className="fa-solid fa-headset"></i>
                  </span>
                  <a href="#" className="contact-link">Línea gratuita nacional: 01 8000 411 144</a>
                </li>
              </ul>
          </div>
          <div className="contact-containers contact-social-container d-flex justify-content-center align-items-center">
            <a href="/" className="logo">
              <img src={LogoMedata} alt="Logo MeData" />
            </a>
            <p className="text text-white text-center">
              MEData es la estrategia de datos de la ciudad de Medellín, que busca la apropiación, apertura y uso de los datos como herramienta de gobierno, acción ciudadana y toma de decisiones.
            </p>
            <div className="contact-social">
              <ul className="contact-social-list">
                <li className="contact-social-item">
                  <a href="">
                    <img src={LogoFacebook} alt="Facebook" />
                  </a>
                </li>
                <li className="contact-social-item">
                  <a href="">
                    <img src={LogoTwitter} alt="Twitter" />
                  </a>
                </li>
                <li className="contact-social-item">
                  <a href="">
                    <img src={LogoInstagram} alt="Instagram" />
                  </a>
                </li>
                <li className="contact-social-item">
                  <a href="">
                    <img src={LogoYoutube} alt="Youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer d-flex align-items-center justify-content-center">
        <p className="text text-white">Copyright © Medata 2022 ® todos los derechos reservados</p>
        <p className="text text-secondary"><a href="#">Condiciones de Uso</a></p>
        <p className="text text-secondary"><a href="#">Políticas de Privacidad</a></p>
      </div>
      <div className="contact-image">
        <img src={ImagenFondo} />
      </div>
    </section>
  );
};

export default Header;
