"use strict";

var IconoAmbiente = require("../../../../../../medatatheme/assets/icons/topics/white/icon-ambiente.png");
var IconoCultura = require("../../../../../../medatatheme/assets/icons/topics/white/icon-cultura.png");
var IconoDesarrollo = require("../../../../../../medatatheme/assets/icons/topics/white/icon-desarrollo.png");
var IconoEconomia = require("../../../../../../medatatheme/assets/icons/topics/white/economia.png");
var IconoEducacion = require("../../../../../../medatatheme/assets/icons/topics/white/icon-educacion.png");
var IconoGubernamental = require("../../../../../../medatatheme/assets/icons/topics/white/icon-gubernamental.svg");
var IconoHacienda = require("../../../../../../medatatheme/assets/icons/topics/white/icon-hacienda.png");
var IconoInfraestructura = require("../../../../../../medatatheme/assets/icons/topics/white/icon-infraestructura.png");
var IconoMovilidad = require("../../../../../../medatatheme/assets/icons/topics/white/icon-movilidad.png");
var IconoOrdenamiento = require("../../../../../../medatatheme/assets/icons/topics/white/icon-ordenamiento.png");
var IconoPoblacion = require("../../../../../../medatatheme/assets/icons/topics/white/poblacion.png");
var IconoSalud = require("../../../../../../medatatheme/assets/icons/topics/white/icon-salud.png");
var IconoSocial = require("../../../../../../medatatheme/assets/icons/topics/white/icon-social.svg");
var IconoTerritorios = require("../../../../../../medatatheme/assets/icons/topics/white/icon-territorios.svg");
var IconoVivienda = require("../../../../../../medatatheme/assets/icons/topics/white/icon-vivienda.svg");


var IconoAmbienteBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-ambiente.png");
var IconoCulturaBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-cultura.png");
var IconoDesarrolloBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-desarrollo.png");
var IconoEconomiaBlack = require("../../../../../../medatatheme/assets/icons/topics/black/economia.png");
var IconoEducacionBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-educacion.png");
var IconoGubernamentalBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-gubernamental.svg");
var IconoHaciendaBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-hacienda.png");
var IconoInfraestructuraBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-infraestructura.png");
var IconoMovilidadBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-movilidad.png");
var IconoOrdenamientoBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-ordenamiento.png");
var IconoPoblacionBlack = require("../../../../../../medatatheme/assets/icons/topics/black/poblacion.png");
var IconoSaludBlack = require("../../../../../../medatatheme/assets/icons/topics/black/icon-salud.png");
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
