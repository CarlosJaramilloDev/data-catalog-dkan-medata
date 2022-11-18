import React from "react";

import HomeDataTopicDetail from "./home-data-topic-detail"

const HomeDataTopics = ({
  title = 'Temáticas de datos',
  text = 'Texto de introducción o explicación del tipo de contenido al cual podrá acceder el usuario visitante… Pendiente por definir.',
  items = []
}) => {

  const itemsShow = items.map((item, index) => {
    console.log(item);
    return (
      <HomeDataTopicDetail id={i} url={item.ref} title={item.title} />
    );
  })
  
  return (
    <div class="data-group">
      <p class="title title--grey">{title}</p>
      <hr class="separator separator--grey" />
      <p class="text">
      {text}
      </p>
      <div class="grid">
        <div class="category-info">
          <img src={IconoGubernamental} alt="Gubernamental" />
          <p class="text">Gubernamental</p>
        </div>
        <div class="category-info">
          <img src={IconoSocial} alt="Social" />
          <p class="text">Social</p>
        </div>
        <div class="category-info">
          <img src={IconoSalud} alt="Salud" />
          <p class="text">Salud</p>
        </div>
        <div class="category-info">
          <img src={IconoPoblacion} alt="Población" />
          <p class="text">Población</p>
        </div>
        <div class="category-info">
          <img src={IconoInfraestructura} alt="Infraestructura y Catastro" />
          <p class="text">Infraestructura y Catastro</p>
        </div>
        <div class="category-info">
          <img src={IconoHacienda} alt="Hacienda, Presupuesto y Contratación" />
          <p class="text">Hacienda, Presupuesto y Contratación</p>
        </div>
        <div class="category-info">
          <img src={IconoEducacion} alt="Educación, Cultura y Recreación" />
          <p class="text">Educación, Cultura y Recreación</p>
        </div>
        <div class="category-info">
          <img src={IconoMedioAmbiente} alt="Medio Ambiente" />
          <p class="text">Medio Ambiente</p>
        </div>
        <div class="category-info">
          <img src={IconoMovilidad} alt="Movilidad" />
          <p class="text">Movilidad</p>
        </div>
        <div class="category-info">
          <img src={IconoPlanDesarrollo} alt="Plan de Desarrollo" />
          <p class="text">Plan de Desarrollo</p>
        </div>
        <div class="category-info">
          <img src={IconoOrdenamiento} alt="Ordenamiento Territorial" />
          <p class="text">Ordenamiento Territorial</p>
        </div>
        <div class="category-info">
          <img src={IconoDesarrolloEconomico} alt="Desarrollo Económico" />
          <p class="text">Desarrollo Económico</p>
        </div>
      </div>
      <div class="grid">
       {itemsShow}
      </div>
    </div>
  );
};

export default HomeDataTopics;
