import React from "react";
import IconoNews from "../../../medatatheme/assets/icons/newspaper.png"

const HomeNewslater = () => {
  return (
    <div className="newsletter-info">
      <div className="newsletter-info-title d-flex align-items-center">
        <img className="d-ib" src={IconoNews} alt="newspaper" />
        <div className="d-ib">
          <p class="newsletter-title">
            Para estar más cerca...
            <br />
            <b>Suscríbete </b> a nuestros canales
          </p>
        </div>
      </div>
      <div className="input-wrapper">
        <div>
          <input class="newsletter-input" type="text" placeholder="Ingresa tu correo electrónico…" />
            <p class="newsletter-subtitle">Al dar click en Suscribirme acepta los <a href="/"> términos y
              condiciones</a></p>
        </div>
        <button class="button button-secondary">
          SUSCRÍBETE AL BOLETIN
        </button>
      </div>
    </div>
  );
};

export default HomeNewslater;
