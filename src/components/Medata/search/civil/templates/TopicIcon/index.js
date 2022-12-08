"use strict";

var IconoAmbiente = require("../../../../../../medatatheme/assets/icons/topics/white/icon-ambiente.svg");
var IconoCultura = require("../../../../../../medatatheme/assets/icons/topics/white/icon-cultura.svg");
var IconoDesarrollo = require("../../../../../../medatatheme/assets/icons/topics/white/icon-desarrollo.svg");
var IconoEconomia = require("../../../../../../medatatheme/assets/icons/topics/white/icon-economia.svg");
var IconoEducacion = require("../../../../../../medatatheme/assets/icons/topics/white/icon-educacion.svg");
var IconoGubernamental = require("../../../../../../medatatheme/assets/icons/topics/white/icon-gubernamental.svg");
var IconoHacienda = require("../../../../../../medatatheme/assets/icons/topics/white/icon-hacienda.svg");
var IconoInfraestructura = require("../../../../../../medatatheme/assets/icons/topics/white/icon-infraestructura.svg");
var IconoMovilidad = require("../../../../../../medatatheme/assets/icons/topics/white/icon-movilidad.svg");
var IconoOrdenamiento = require("../../../../../../medatatheme/assets/icons/topics/white/icon-ordenamiento.svg");
var IconoPoblacion = require("../../../../../../medatatheme/assets/icons/topics/white/icon-poblacion.svg");
var IconoSalud = require("../../../../../../medatatheme/assets/icons/topics/white/icon-salud.svg");
var IconoSocial = require("../../../../../../medatatheme/assets/icons/topics/white/icon-social.svg");
var IconoTerritorios = require("../../../../../../medatatheme/assets/icons/topics/white/icon-territorios.svg");
var IconoVivienda = require("../../../../../../medatatheme/assets/icons/topics/white/icon-vivienda.svg");


var IconoAmbienteBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-ambiente.svg");
var IconoCulturaBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-cultura.svg");
var IconoDesarrolloBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-desarrollo.svg");
var IconoEconomiaBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-economia.svg");
var IconoEducacionBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-educacion.svg");
var IconoGubernamentalBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-gubernamental.svg");
var IconoHaciendaBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-hacienda.svg");
var IconoInfraestructuraBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-infraestructura.svg");
var IconoMovilidadBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-movilidad.svg");
var IconoOrdenamientoBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-ordenamiento.svg");
var IconoPoblacionBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-poblacion.svg");
var IconoSaludBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-salud.svg");
var IconoSocialBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-social.svg");
var IconoTerritoriosBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-territorios.svg");
var IconoViviendaBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-vivienda.svg");


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
    case "Medio Ambiente":
      icon = (color === 'white') ? IconoAmbiente : IconoAmbienteBlack;
      break;
    case "Cultura":
      icon = (color === 'white') ? IconoCultura : IconoCulturaBlack;
      break;
    case "Plan de Desarrollo":
      icon = (color === 'white') ? IconoDesarrollo : IconoDesarrolloBlack;
      break;
    case "Desarrollo Económico":
      icon = (color === 'white') ? IconoEconomia : IconoEconomiaBlack;
      break;
    case "Educación, Cultura y Recreación":
      icon = (color === 'white') ? IconoEducacion : IconoEducacionBlack;
      break;
    case "Gubernamental":
      icon = (color === 'white') ? IconoGubernamental : IconoGubernamentalBlack;
      break;
    case "Hacienda, Presupuesto y Contratación":
      icon = (color === 'white') ? IconoHacienda : IconoHaciendaBlack;
      break;
    case "Infraestructura y Catastro":
      icon = (color === 'white') ? IconoInfraestructura : IconoInfraestructuraBlack;
      break;
    case "Movilidad":
      icon = (color === 'white') ? IconoMovilidad : IconoMovilidadBlack;
      break;
    case "Ordenamiento Territorial":
      icon = (color === 'white') ? IconoOrdenamiento : IconoOrdenamientoBlack;
      break;
    case "Población":
      icon = (color === 'white') ? IconoPoblacion : IconoPoblacionBlack;
      break;
    case "Salud":
      icon = (color === 'white') ? IconoSalud : IconoSaludBlack;
      break;
    case "Social": 
      icon = (color === 'white') ? IconoSocial : IconoSocialBlack;
      break;
    case "Territorios":
      icon = (color === 'white') ? IconoTerritorios : IconoTerritoriosBlack;
      break;
    case "Vivienda":
      icon = (color === 'white') ? IconoVivienda : IconoViviendaBlack;
      break;
    default:
      icon = (color === 'white') ? IconoEconomia : IconoEconomiaBlack;
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
