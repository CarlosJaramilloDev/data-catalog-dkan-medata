"use strict";

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

  var iconClass = null;

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

  return /*#__PURE__*/ _react["default"].createElement("i", {
    className: `category-icon icon-${iconClass}`
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
