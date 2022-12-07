import React from "react";

const HomeDataTopicDetail = ({
  id,
  title,
  url
}) => {
  let icon;
  switch (title) {
    case "Social":
      //icon = IconoSocial;
      icon = 'social';
      break;
    case "Población":
      icon = 'poblacion';
      break;
    case "Plan de Desarrollo":
      icon = 'plan-desarrollo';
      break;
    /* case "Movilidad":
      icon = IconoMovilidad;
      break;
    case "Infraestructura y Catastro":
      icon = IconoInfraestructura;
      break;
    case "Educación, Cultura y Recreación":
      icon = IconoEducacion;
      break;
    case "Hacienda, Presupuesto y Contratación":
      icon = IconoHacienda;
      break;
    case "Desarrollo Económico":
      icon = IconoDesarrolloEconomico;
      break;
    case "Salud":
      icon = IconoSalud;
      break;
    case "Gubernamental":
      icon = IconoGubernamental;
      break;
    case "Ordenamiento Territorial":
      icon = IconoOrdenamiento;
      break;
    case "Medio Ambiente":
      icon = IconoMedioAmbiente;
      break;
    case "Vivienda, Ciudad y Territorio":
      icon = IconoOrdenamiento;
      break; */
    default:
      icon = 'social';
      break;
  }

  return (
      <div className="category-info" key={id}>
        <a href={url}>
          <i className={icon}></i>
          <p className="text">{title}</p>
        </a>
      </div>
  );
};

export default HomeDataTopicDetail;
