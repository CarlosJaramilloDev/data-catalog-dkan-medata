import React from "react";
import IconoNews from "../../medatatheme/assets/icons/newspaper.png"

const HomeNewslater = () => {
  return (
    <div className="newsletter-info">
      <div className="d-flex align-items-center">
        <img className="d-ib" src={IconoNews} alt="newspaper" />
        <div className="d-ib">
          <p className="newsletter-title">Suscríbete a nuestros boletines</p>
          <p className="newsletter-subtitle">Al dar click en Suscribirme acepta los <a> términos y condiciones</a></p>
        </div>
      </div>
      <div className="input-wrapper">
        <input className="newsletter-input" type="text" placeholder="Ingresa tu correo electrónico…" />
        <button className="button button-secondary">
          Suscribirme
        </button>
      </div>
    </div>
  );
};

export default HomeNewslater;
