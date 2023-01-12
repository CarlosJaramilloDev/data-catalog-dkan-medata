import React from "react";

const HomeDataTopicDetail = ({
  id,
  title,
  url
}) => {
  let iconClass;
  switch (title) {
    case "Agricultura y Desarrollo Rural":
      iconClass = 'icon-01';
      break;
    
    case "Ambiente y Desarrollo Sostenible":
      iconClass = 'icon-02';
      break;
    
    case "Ciencia Tecnología e Innovación":
      iconClass = 'icon-03';
      break;
    
    case "Comercio, Industria y Turismo":
      iconClass = 'icon-04';
      break;
    
    case "Cultura":
      iconClass = 'icon-05';
      break;
    
    case "Deporte y Recreación":
      iconClass = 'icon-06';
      break;
    
    case "Economía y Finanzas":
      iconClass = 'icon-07';
      break;
    
    case "Educación":
      iconClass = 'icon-08';
      break;
    
    case "Estadísticas Nacionales":
      iconClass = 'icon-09';
      break;
    
    case "Función Pública":
      iconClass = 'icon-10';
      break;
    
    case "Gastos Gubernamentales":
      iconClass = 'icon-11';
      break;
    
    case "Hacienda y Crédito Público":
      iconClass = 'icon-12';
      break;
    
    case "Inclusión Social y Reconciliación":
      iconClass = 'icon-13';
      break;
    
    case "Justicia y Derecho":
      iconClass = 'icon-14';
      break;
    
    case "Mapas Nacionales":
      iconClass = 'icon-15';
      break;
    
    case "Minas y Energías":
      iconClass = 'icon-16';
      break;
    
    case "Ordenamiento Territorial":
      iconClass = 'icon-17';
      break;
    
    case "Organismos de Control":
      iconClass = 'icon-18';
      break;
    
    case "Participación Ciudadana":
      iconClass = 'icon-19';
      break;
    
    case "Presupuestos Gubernamentales":
      iconClass = 'icon-20';
      break;
    
    case "Resultados Electorales":
      iconClass = 'icon-21';
      break;
    
    case "Salud y Protección Social":
      iconClass = 'icon-22';
      break;
    
    case "Seguridad y Defensa":
      iconClass = 'icon-23';
      break;
    
    case "Trabajo":
      iconClass = 'icon-24';
      break;
    
    case "Transporte":
      iconClass = 'icon-25';
      break;
    
    case "Vivienda, Ciudad y Territorio":
      iconClass = 'icon-26';
      break;
    
    default:
      iconClass = 'icon-15';
      break;
  }

  return (
    <a href={url} className="category-info" key={id}>
      <i className={`category-icon ${iconClass}`}></i>
      <p className="text">{title}</p>
    </a>
  );
};

export default HomeDataTopicDetail;
