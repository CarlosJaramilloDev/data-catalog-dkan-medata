import React from "react";
import LogoFacebook from "../../medatatheme/assets/icons/social-network/facebook.png";
import LogoTwitter from "../../medatatheme/assets/icons/social-network/twitter.png";
import LogoInstagram from "../../medatatheme/assets/icons/social-network/instagram.png";
import LogoYoutube from "../../medatatheme/assets/icons/social-network/youtube.png";
import ImagenFondo from '../../medatatheme/assets/images/item.png';
import LogoMedata from "../../medatatheme/assets/images/logo.png";

const Header = () => {
  return (
    <section class="contact-section">
      <div class="container-home">
        <div class="grid">
          <div class="contact-containers">
            <p class="contact-title">Links de interés</p>
            <hr class="contact-separator" />
              <ul class="contact-list">
                <li class="contact-item">
                  <span class="contact-decorator"></span>
                  <a href="#" class="contact-link">Portal Alcaldia de Medellín</a>
                </li>
                <li class="contact-item">
                  <span class="contact-decorator"></span>
                  <a href="#" class="contact-link">Página Corporación Ruta N</a>
                </li>
                <li class="contact-item">
                  <span class="contact-decorator"></span>
                  <a href="#" class="contact-link">Portal Datos Abiertos Colombia</a>
                </li>
              </ul>
          </div>
          <div class="contact-containers">
            <p class="contact-title">Contacto</p>
            <hr class="contact-separator" />
              <ul class="contact-list">
                <li class="contact-item">
                  <span class="contact-icon">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  <a href="#" class="contact-link">Calle 44 N 52 – 165 Centro Administrativo la Alpujarra – Medellín, Colombia.</a>
                </li>
                <li class="contact-item">
                  <span class="contact-icon">
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                  <a href="#" class="contact-link">medata@medellin.gov.co</a>
                </li>
                <li class="contact-item">
                  <span class="contact-icon">
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  <a href="#" class="contact-link">Línea única de atención ciudadana: (574) 44 44 144</a>
                </li>
                <li class="contact-item">
                  <span class="contact-icon">
                    <i class="fa-solid fa-headset"></i>
                  </span>
                  <a href="#" class="contact-link">Línea gratuita nacional: 01 8000 411 144</a>
                </li>
              </ul>
          </div>
          <div class="contact-containers contact-social-container d-flex justify-content-center align-items-center">
            <a href="/" class="logo">
              <img src={LogoMedata} alt="Logo MeData" />
            </a>
            <p class="text text-white text-center">
              MEData es la estrategia de datos de la ciudad de Medellín, que busca la apropiación, apertura y uso de los datos como herramienta de gobierno, acción ciudadana y toma de decisiones.
            </p>
            <div class="contact-social">
              <ul class="contact-social-list">
                <li class="contact-social-item">
                  <a href="">
                    <img src={LogoFacebook} alt="Facebook" />
                  </a>
                </li>
                <li class="contact-social-item">
                  <a href="">
                    <img src={LogoTwitter} alt="Twitter" />
                  </a>
                </li>
                <li class="contact-social-item">
                  <a href="">
                    <img src={LogoInstagram} alt="Instagram" />
                  </a>
                </li>
                <li class="contact-social-item">
                  <a href="">
                    <img src={LogoYoutube} alt="Youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer d-flex align-items-center justify-content-center">
        <p class="text text-white">Copyright © Medata 2022 ® todos los derechos reservados</p>
        <p class="text text-secondary"><a href="#">Condiciones de Uso</a></p>
        <p class="text text-secondary"><a href="#">Políticas de Privacidad</a></p>
      </div>
      <div class="contact-image">
        <img src={ImagenFondo} />
      </div>
    </section>
  );
};

export default Header;
