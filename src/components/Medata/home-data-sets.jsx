import React from "react";
import IconoNumeroDatos from '../../medatatheme/assets/icons/group-data/icon-1.png';
import IconoDependenciaDatos from '../../medatatheme/assets/icons/group-data/icon-2.png';
import IconoNumeroTableros from '../../medatatheme/assets/icons/group-data/icon-3.png';
import IconoNumeroVisitas from '../../medatatheme/assets/icons/group-data/icon-4.png';

const HomeDataSets = () => {
  return (
    <div class="data-group">
      <p class="title title--black">
        Información sobre conjunto de datos
      </p>
      <hr class="separator separator--black" />
      <p class="text">
        Texto de introducción o explicación del tipo de contenido al cual podrá acceder el usuario visitante… Pendiente por definir
      </p>
      <div class="grid">
        <div class="data-info">
          <img src={IconoNumeroDatos} alt="" />
          <p class="data-info-number">
            235
          </p>
          <p class="text">
            Número de conjuntos de datos
          </p>
        </div>
        <div class="data-info">
          <img src={IconoDependenciaDatos} alt="" />
          <p class="data-info-number">
            25
          </p>
          <p class="text">
            Dependencias con datos publicados
          </p>
        </div>
        <div class="data-info">
          <img src={IconoNumeroTableros} alt="" />
          <p class="data-info-number">
            53
          </p>
          <p class="text">
            Número de tableros de análisis
          </p>
        </div>
        <div class="data-info">
          <img src={IconoNumeroVisitas} alt="" />
          <p class="data-info-number">
            162.67
          </p>
          <p class="text">
            Número de visitas a la fecha
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeDataSets;
