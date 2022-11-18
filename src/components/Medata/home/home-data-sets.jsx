import React from "react";
import IconoNumeroDatos from '../../../medatatheme/assets/icons/group-data/icon-1.png';
import IconoDependenciaDatos from '../../../medatatheme/assets/icons/group-data/icon-2.png';
import IconoNumeroTableros from '../../../medatatheme/assets/icons/group-data/icon-3.png';
import IconoNumeroVisitas from '../../../medatatheme/assets/icons/group-data/icon-4.png';

const HomeDataSets = () => {
  return (
    <div className="data-group">
      <p className="title title--black">
        Información sobre conjunto de datos
      </p>
      <hr className="separator separator--black" />
      <p className="text">
        Texto de introducción o explicación del tipo de contenido al cual podrá acceder el usuario visitante… Pendiente por definir
      </p>
      <div className="grid">
        <div className="data-info">
          <img src={IconoNumeroDatos} alt="" />
          <p className="data-info-number">
            235
          </p>
          <p className="text">
            Número de conjuntos de datos
          </p>
        </div>
        <div className="data-info">
          <img src={IconoDependenciaDatos} alt="" />
          <p className="data-info-number">
            25
          </p>
          <p className="text">
            Dependencias con datos publicados
          </p>
        </div>
        <div className="data-info">
          <img src={IconoNumeroTableros} alt="" />
          <p className="data-info-number">
            53
          </p>
          <p className="text">
            Número de tableros de análisis
          </p>
        </div>
        <div className="data-info">
          <img src={IconoNumeroVisitas} alt="" />
          <p className="data-info-number">
            162.67
          </p>
          <p className="text">
            Número de visitas a la fecha
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeDataSets;
