import React from "react";

const HomeDataTopicDetail = ({
  id,
  title,
  url
}) => {
  let iconClass;
  switch (title) {
    case "Social":
      iconClass = 'social';
      break;
    case "Población":
      iconClass = 'poblacion';
      break;
    case "Plan de Desarrollo":
      iconClass = 'desarrollo';
      break;
    case "Movilidad":
      iconClass = 'movilidad';
      break;
    case "Infraestructura y Catastro":
      iconClass = 'infraestructura';
      break;
    case "Educación, Cultura y Recreación":
      iconClass = 'educacion';
      break;
    case "Hacienda, Presupuesto y Contratación":
      iconClass = 'hacienda';
      break;
    case "Desarrollo Económico":
      iconClass = 'economia';
      break;
    case "Salud":
      iconClass = 'salud';
      break;
    case "Gubernamental":
      iconClass = 'gubernamental';
      break;
    case "Ordenamiento Territorial":
      iconClass = 'ordenamiento';
      break;
    case "Medio Ambiente":
      iconClass = 'ambiente';
      break;
    case "Cultura":
      iconClass = 'cultura';
      break;
    case "Territorios":
      iconClass = 'territorios';
      break;
    case "Vivienda":
      iconClass = 'vivienda';
      break;
    default:
      iconClass = 'social';
      break;
  }

  return (
    <a href={url} className="category-info" key={id}>
      <i className={`category-icon icon-${iconClass}`}></i>
      <p className="text">{title}</p>
    </a>
  );
};

export default HomeDataTopicDetail;
