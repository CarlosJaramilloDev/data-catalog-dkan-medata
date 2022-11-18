import React from "react";
import IconoGubernamental from "../../medatatheme/assets/icons/topics/icon-1.png"
import IconoSocial from "../../medatatheme/assets/icons/topics/icon-2.png"
import IconoSalud from "../../medatatheme/assets/icons/topics/icon-3.png"
import IconoPoblacion from "../../medatatheme/assets/icons/topics/icon-4.png"
import IconoInfraestructura from "../../medatatheme/assets/icons/topics/icon-5.png"
import IconoHacienda from "../../medatatheme/assets/icons/topics/icon-6.png"
import IconoEducacion from "../../medatatheme/assets/icons/topics/icon-7.png"
import IconoMedioAmbiente from "../../medatatheme/assets/icons/topics/icon-8.png"
import IconoMovilidad from "../../medatatheme/assets/icons/topics/icon-9.png"
import IconoPlanDesarrollo from "../../medatatheme/assets/icons/topics/icon-10.png"
import IconoOrdenamiento from "../../medatatheme/assets/icons/topics/icon-11.png"
import IconoDesarrolloEconomico from "../../medatatheme/assets/icons/topics/icon-12.png"

const HomeDataTopicDetail = ({
  id,
  title,
  url
}) => {
  let icon;
  switch (title) {
    case "Transportation":
      icon = IconoGubernamental;
      break;
    case "Public Safety":
      icon = IconoSocial;
      break;
    default:
      icon = IconoDesarrolloEconomico;
      break;
  }

  return (
      <div class="category-info" key={id}>
        <a href={`/${url}`}>
          <img src={icon} alt={title} />
          <p class="text">{title}</p>
        </a>
      </div>
  );
};

export default HomeDataTopicDetail;
