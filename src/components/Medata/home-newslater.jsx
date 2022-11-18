import React from "react";
import IconoNews from "../../medatatheme/assets/icons/newspaper.png"

const HomeNewslater = () => {
  return (
    <div class="newsletter-info">
      <div class="d-flex align-items-center">
        <img class="d-ib" src={IconoNews} alt="newspaper" />
        <div class="d-ib">
          <p class="newsletter-title">Suscríbete a nuestros boletines</p>
          <p class="newsletter-subtitle">Al dar click en Suscribirme acepta los <a> términos y condiciones</a></p>
        </div>
      </div>
      <div class="input-wrapper">
        <input class="newsletter-input" type="text" placeholder="Ingresa tu correo electrónico…" />
        <button class="button button-secondary">
          Suscribirme
        </button>
      </div>
    </div>
  );
};

export default HomeNewslater;
