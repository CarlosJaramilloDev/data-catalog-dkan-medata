import React from "react";
import IconFacebook from '../../../medatatheme/assets/icons/social-network/facebook.png';
import IconTwitter from '../../../medatatheme/assets/icons/social-network/twitter.png';
import IconInstagram from '../../../medatatheme/assets/icons/social-network/insta.png';
import IconVimeo from '../../../medatatheme/assets/icons/social-network/vimeo.png';
import IconYoutube from '../../../medatatheme/assets/icons/social-network/youtube.png';
import IconArrow from '../../../medatatheme/assets/icons/social-arrow.png';

const HomeSocialMedia = () => {

  return (
    <div class="social-container">
      <div class="social-item">
        <img src={IconFacebook} alt="Facebook" />
        <a href="https://www.facebook.com/AlcaldiadeMed">
        <img src={IconArrow} /> Seguir ahora
        </a>
      </div>
      <div class="social-item">
        <img src={IconTwitter} alt="Twitter" />
        <a href="https://twitter.com/AlcaldiadeMed">
          <img src={IconArrow} /> Seguir ahora
        </a>
      </div>
      <div class="social-item">
        <img src={IconInstagram} alt="Instagram" />
        <a href="https://www.instagram.com/alcaldiademed">
          <img src={IconArrow} /> Seguir ahora
        </a>
      </div>
      <div class="social-item">
        <img src={IconVimeo} alt="Vimeo" />
        <a href="https://vimeo.com/user118558690">
          <img src={IconArrow} /> Seguir ahora
        </a>
      </div>
      <div class="social-item">
        <img src={IconYoutube} alt="Youtube" />
        <a href="https://www.youtube.com/channel/UCAFLU70jPz4bODq_5BSWPIg">
          <img src={IconArrow} /> Seguir ahora
        </a>
      </div>
    </div>
  );
};

export default HomeSocialMedia;
