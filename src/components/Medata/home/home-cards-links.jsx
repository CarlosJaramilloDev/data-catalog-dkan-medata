import React from "react";
import ImagenDatosAbiertos from '../../../medatatheme/assets/images/main-1.png';
import ImagenMedellinCifras from '../../../medatatheme/assets/images/main-2.png';
import ImagenHistoriasDatos from '../../../medatatheme/assets/images/main-3.png';

const HomeCardsLinks = () => {
  return (
    <div className="grid">
      <div className="card">
        <div className="card-header">
          <img src={ImagenDatosAbiertos} alt="Datos abiertos" />
        </div>
        <div className="card-body">
          <div className="margin-bottom">
            <p className="title title--black">Datos abiertos</p>
          </div>
          <div className="margin-bottom">
            <p className="text">
              Búsqueda, exploración y descarga de los conjuntos de datos de la
              Alcaldía de Medellín
            </p>
          </div>
          <a className="button button-primary" href="/search/?keyword=datos">
            CONOCE MÁS
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <img src={ImagenMedellinCifras} alt="Imagen 2" />
        </div>
        <div className="card-body">
          <div className="margin-bottom">
            <p className="title title--black">Medellín en cifras</p>
          </div>
          <div className="margin-bottom">
            <p className="text">
              Tableros dinámicos para explorar las cifras más importantes de la
              ciudad
            </p>
          </div>
          <a className="button button-primary" href="/search/?publisher__name=Medell%C3%8Dn%20en%20Cifras">
          CONOCE MÁS
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <img src={ImagenHistoriasDatos} alt="Imagen 3" />
        </div>
        <div className="card-body">
          <div className="margin-bottom">
            <p className="title title--black">Historias de datos</p>
          </div>
          <div className="margin-bottom">
            <p className="text">
              Notas, narrativas e historias relacionadas con los datos de
              Medellín
            </p>
          </div>
          <a className="button button-primary" href="/historias">
          CONOCE MÁS
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeCardsLinks;
