"use strict";

var IconoGubernamental = require("../../../../../../medatatheme/assets/icons/topics/icon-1.png");
var IconoSocial = require("../../../../../../medatatheme/assets/icons/topics/icon-2.png");
var IconoSalud = require("../../../../../../medatatheme/assets/icons/topics/icon-3.png");
var IconoPoblacion = require("../../../../../../medatatheme/assets/icons/topics/icon-4.png");
var IconoInfraestructura = require("../../../../../../medatatheme/assets/icons/topics/icon-5.png");
var IconoHacienda = require("../../../../../../medatatheme/assets/icons/topics/icon-6.png");
var IconoEducacion = require("../../../../../../medatatheme/assets/icons/topics/icon-7.png");
var IconoMedioAmbiente = require("../../../../../../medatatheme/assets/icons/topics/icon-8.png");
var IconoMovilidad = require("../../../../../../medatatheme/assets/icons/topics/icon-9.png");
var IconoPlanDesarrollo = require("../../../../../../medatatheme/assets/icons/topics/icon-10.png");
var IconoOrdenamiento = require("../../../../../../medatatheme/assets/icons/topics/icon-11.png");
var IconoDesarrolloEconomico = require("../../../../../../medatatheme/assets/icons/topics/icon-12.png");

var IconoGubernamentalBlack = require("../../../../../../medatatheme/assets/icons/topics/icon-1.png");
var IconoSocialBlack = require("../../../../../../medatatheme/assets/icons/topics/icon-2.png");
var IconoSaludBlack = require("../../../../../../medatatheme/assets/icons/topics/icon-3.png");
var IconoPoblacionBlack = require("../../../../../../medatatheme/assets/icons/topics/icon-4.png");
var IconoInfraestructuraBlack = require("../../../../../../medatatheme/assets/icons/topics/icon-5.png");
var IconoHaciendaBlack = require("../../../../../../medatatheme/assets/icons/topics/icon-6.png");
var IconoEducacionBlack = require("../../../../../../medatatheme/assets/icons/topics/icon-7.png");
var IconoMedioAmbienteBlack = require("../../../../../../medatatheme/assets/icons/topics/icon-8.png");
var IconoMovilidadBlack = require("../../../../../../medatatheme/assets/icons/topics/icon-9.png");
var IconoPlanDesarrolloBlack = require("../../../../../../medatatheme/assets/icons/topics/icon-10.png");
var IconoOrdenamientoBlack = require("../../../../../../medatatheme/assets/icons/topics/icon-11.png");
var IconoDesarrolloEconomicoBlack = require("../../../../../../medatatheme/assets/icons/topics/icon-12.png");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function TopicIcon(_ref) {
  var title = _ref.title,
    height = _ref.height,
    width = _ref.width,
    color = _ref.color;

  var icon = null;

  switch (title) {
    case "Social": 
      icon = (color === 'white') ? IconoSocial : IconoSocialBlack;
      break;
    case "Población":
      icon = (color === 'white') ? IconoPoblacion : IconoPoblacionBlack;
      break;
    case "Plan de Desarrollo":
      icon = (color === 'white') ? IconoPlanDesarrollo : IconoPlanDesarrolloBlack;
      break;
    case "Movilidad":
      icon = (color === 'white') ? IconoMovilidad : IconoMovilidadBlack;
      break;
    case "Infraestructura y Catastro":
      icon = (color === 'white') ? IconoInfraestructura : IconoInfraestructuraBlack;
      break;
    case "Educación, Cultura y Recreación":
      icon = (color === 'white') ? IconoEducacion : IconoEducacionBlack;
      break;
    case "Hacienda, Presupuesto y Contratación":
      icon = (color === 'white') ? IconoHacienda : IconoHaciendaBlack;
      break;
    case "Desarrollo Económico":
      icon = (color === 'white') ? IconoDesarrolloEconomico : IconoDesarrolloEconomicoBlack;
      break;
    case "Salud":
      icon = (color === 'white') ? IconoSalud : IconoSaludBlack;
      break;
    case "Gubernamental":
      icon = (color === 'white') ? IconoGubernamental : IconoGubernamentalBlack;
      break;
    case "Ordenamiento Territorial":
      icon = (color === 'white') ? IconoOrdenamiento : IconoOrdenamientoBlack;
      break;
    case "Medio Ambiente":
      icon = (color === 'white') ? IconoMedioAmbiente : IconoMedioAmbienteBlack;
      break;
    case "Vivienda, Ciudad y Territorio":
      icon = (color === 'white') ? IconoOrdenamiento : IconoOrdenamientoBlack;
      break;
    default:
      icon = (color === 'white') ? IconoDesarrolloEconomico : IconoDesarrolloEconomicoBlack;
      break;
  }

  return /*#__PURE__*/ _react["default"].createElement("img", {
    src: icon,
    alt: title,
    width: width,
    height: height,
  });
}

TopicIcon.defaultProps = {
  title: "Tema por defecto...",
  size: 24,
  color: 'white'
};
TopicIcon.propTypes = {
  title: _propTypes["default"].string,
  size: _propTypes["default"].number,
};
var _default = TopicIcon;
exports["default"] = _default;
