import React from "react";
import IconoNumeroDatos from '../../../medatatheme/assets/icons/group-data/icon-1.png';
import IconoDependenciaDatos from '../../../medatatheme/assets/icons/group-data/icon-2.png';
import IconoNumeroTableros from '../../../medatatheme/assets/icons/group-data/icon-3.png';

const HomeDataSets = ({
  dataLength,
  publishersLength,
  boardsLength
}) => {
  return (
    <div className="data-group">
      <p className="title title--black">
        Información sobre conjunto de datos
      </p>
      <hr className="separator separator--black" />
      <p className="text">
      Los datos abiertos son información pública, dispuesta en diferentes formatos, que permite su uso y reutilización bajo licencia abierta y sin restricciones legales para su aprovechamiento.</p>
      <p className="text">
      ¿Para qué pueden servirte los datos abiertos de MEData? Te damos algunas ideas:
      </p>
      <p className="text">
      Planear tus procesos y negocios.<br/>
      Hacer veeduría a la Administración Pública.<br/>
      Diseñar productos.<br/>
      Escribir artículos.<br/>
      Basar tus investigaciones en información de primera mano.<br/>
      Conocer a Medellín y sus múltiples realidades.<br/>
      </p>
      <div className="grid">
        <div className="data-info">
          <img src={IconoNumeroDatos} alt="" />
          <p className="data-info-number">
            {dataLength}
          </p>
          <p className="text">
            Número de conjuntos de datos
          </p>
        </div>
        <div className="data-info">
          <img src={IconoDependenciaDatos} alt="" />
          <p className="data-info-number">
            {publishersLength}
          </p>
          <p className="text">
            Dependencias con datos publicados
          </p>
        </div>
        <div className="data-info">
          <img src={IconoNumeroTableros} alt="" />
          <p className="data-info-number">
            {boardsLength}
          </p>
          <p className="text">
            Número de tableros de análisis
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeDataSets;
