import React from "react";
import ImagenDatosAbiertos from '../../medatatheme/assets/images/main-1.png';
import ImagenMedellinCifras from '../../medatatheme/assets/images/main-2.png';
import ImagenHistoriasDatos from '../../medatatheme/assets/images/main-3.png';

const HomeCardsLinks = () => {
  return (
    <div class="grid">
      <div class="card">
        <div class="card-header">
          <img src={ImagenDatosAbiertos} alt="Datos abiertos" />
        </div>
        <div class="card-body">
          <div class="margin-bottom">
            <p class="title title--black">Datos abiertos</p>
          </div>
          <div class="margin-bottom">
            <p class="text">
              Búsqueda, exploración y descarga de los conjuntos de datos de la
              Alcaldía de Medellín
            </p>
          </div>
          <a class="button button-primary" href="/search">
            Accede a la info
          </a>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <img src={ImagenMedellinCifras} alt="Imagen 2" />
        </div>
        <div class="card-body">
          <div class="margin-bottom">
            <p class="title title--black">Medellín en cifras</p>
          </div>
          <div class="margin-bottom">
            <p class="text">
              Tableros dinámicos para explorar las cifras más importantes de la
              ciudad
            </p>
          </div>
          <a class="button button-primary" href="/search">
            Accede a la info
          </a>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <img src={ImagenHistoriasDatos} alt="Imagen 3" />
        </div>
        <div class="card-body">
          <div class="margin-bottom">
            <p class="title title--black">Historias de datos</p>
          </div>
          <div class="margin-bottom">
            <p class="text">
              Notas, narrativas e historias relacionadas con los datos de
              Medellín
            </p>
          </div>
          <a class="button button-primary" href="/search">
            Accede a la info
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeCardsLinks;
