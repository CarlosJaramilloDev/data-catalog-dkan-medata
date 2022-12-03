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
    width = _ref.width;

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
    width: width,
    height: height,
  });
}

TopicIcon.defaultProps = {
  title: "Tema por defecto...",
  size: 24,
};
TopicIcon.propTypes = {
  title: _propTypes["default"].string,
  size: _propTypes["default"].number,
};
var _default = TopicIcon;
exports["default"] = _default;
