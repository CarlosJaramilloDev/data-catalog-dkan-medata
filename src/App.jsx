import React from 'react';
import { Router } from "@reach/router";
import Home from './templates/home';
import SearchTemplate from './templates/search';
import ApiDocsFull from './templates/api';
import NotFound from './templates/not_found';
import Dataset from './templates/dataset';
import ApiDocsSpecific from './templates/dataset/api';
//import { Accessibility } from 'accessibility';
import './theme/civicindex.css';
import './theme/index.scss';
//import './medatatheme/sass/main.scss';
//import './medatatheme/css/add.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

function App() {
  /* window.addEventListener('load', function () {
    const options = {
      labels: {
        resetTitle: 'Resetear valores',
        closeTitle: 'Cerrar',
        menuTitle: 'Accesibilidad',
        increaseText: 'Aumentar tamaño del texto',
        decreaseText: 'Reducir tamaño del texto',
        increaseTextSpacing: 'Aumentar espaceado del texto',
        decreaseTextSpacing: 'Reducir espaceado del texto',
        increaseLineHeight: 'Aumentar interlineado',
        decreaseLineHeight: 'Reducir interlineado',
        invertColors: 'Invertir colores (Alto contraste)',
        grayHues: 'Escala de grises',
        underlineLinks: 'Destacar hipervínculos',
        bigCursor: 'Cursor grande',
        readingGuide: 'Guía de lectura',
        textToSpeech: 'Texto a voz',
        speechToText: 'Voz a texto',
        disableAnimations: 'Deshabilitar animaciones'
      },
      customFunctions: [
        {
          method: (cf, state) => {
            window.localStorage.clear();
            window.location.reload();
          },
          buttonText: 'Valores por defecto',
          id: 1,
          toggle: false,
          icon: 'restore_alt',
          emoji: '❓'
        }
      ],
      animations: {
        buttons: false
      }
    };
    new Accessibility(options);

    let hrs = document.querySelectorAll('hr.separator, hr.contact-separator');
    hrs.forEach((hr) => {
      const brother = hr.previousElementSibling;
      const syle = getComputedStyle(brother);
      hr.style.setProperty('--hrsize', syle.width);
    });

  }, false); */
  return (
    <Router>
      <NotFound default />
      <Home path="/" />
      <SearchTemplate path="/search" />
      <ApiDocsFull path="/api" />
      <Dataset path="/dataset/:id" />
      <ApiDocsSpecific path="/dataset/:id/api" />
    </Router>
  );
}

export default App;
