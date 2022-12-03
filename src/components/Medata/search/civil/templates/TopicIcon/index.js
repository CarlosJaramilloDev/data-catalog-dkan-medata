"use strict";

import IconoGubernamental from "../../../../../../medatatheme/assets/icons/topics/icon-1.png"
import IconoSocial from "../../../../../../medatatheme/assets/icons/topics/icon-2.png"
import IconoSalud from "../../../../../../medatatheme/assets/icons/topics/icon-3.png"
import IconoPoblacion from "../../../../../../medatatheme/assets/icons/topics/icon-4.png"
import IconoInfraestructura from "../../../../../../medatatheme/assets/icons/topics/icon-5.png"
import IconoHacienda from "../../../../../../medatatheme/assets/icons/topics/icon-6.png"
import IconoEducacion from "../../../../../../medatatheme/assets/icons/topics/icon-7.png"
import IconoMedioAmbiente from "../../../../../../medatatheme/assets/icons/topics/icon-8.png"
import IconoMovilidad from "../../../../../../medatatheme/assets/icons/topics/icon-9.png"
import IconoPlanDesarrollo from "../../../../../../medatatheme/assets/icons/topics/icon-10.png"
import IconoOrdenamiento from "../../../../../../medatatheme/assets/icons/topics/icon-11.png"
import IconoDesarrolloEconomico from "../../../../../../medatatheme/assets/icons/topics/icon-12.png"

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function TopicIcon(_ref) {
  var title = _ref.title,
    size = _ref.size,
    fill = _ref.fill;
  var icon = null;

  switch (title) {
    case "Social":
      icon = IconoSocial;
      break;
    case "Población":
      icon = IconoPoblacion;
      break;
    case "Plan de Desarrollo":
      icon = IconoPlanDesarrollo;
      break;
    case "Movilidad":
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
      break;
    default:
      icon = IconoDesarrolloEconomico;
      break;
  }

  return /*#__PURE__*/ _react["default"].createElement("img", {
    src: icon,
    alt: title,
    width: size,
    height: size,
  });
}

TopicIcon.defaultProps = {
  title: "Tema por defecto...",
  size: 24,
  fill: "",
};
TopicIcon.propTypes = {
  title: _propTypes["default"].string,
  size: _propTypes["default"].number,
  fill: _propTypes["default"].string,
};
var _default = TopicIcon;
exports["default"] = _default;
