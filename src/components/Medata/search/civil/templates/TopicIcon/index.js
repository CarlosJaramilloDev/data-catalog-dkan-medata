"use strict";

const IconoAgriculturayDesarrolloRural = require("../../../../../../medatatheme/assets/icons/topics/white/01_blanco.svg");
const IconoAmbienteyDesarrolloSostenible = require("../../../../../../medatatheme/assets/icons/topics/white/02_blanco.svg");
const IconoCienciaTecnologiaeInnovacion = require("../../../../../../medatatheme/assets/icons/topics/white/03_blanco.svg");
const IconoComercioIndustriayTurismo = require("../../../../../../medatatheme/assets/icons/topics/white/04_blanco.svg");
const IconoCultura = require("../../../../../../medatatheme/assets/icons/topics/white/05_blanco.svg");
const IconoDeporteyRecreacion = require("../../../../../../medatatheme/assets/icons/topics/white/06_blanco.svg");
const IconoEconomiayFinanzas = require("../../../../../../medatatheme/assets/icons/topics/white/07_blanco.svg");
const IconoEducacion = require("../../../../../../medatatheme/assets/icons/topics/white/08_blanco.svg");
const IconoEstadisticasNacionales = require("../../../../../../medatatheme/assets/icons/topics/white/09_blanco.svg");
const IconoFuncionPublica = require("../../../../../../medatatheme/assets/icons/topics/white/10_blanco.svg");
const IconoGastosGubernamentales = require("../../../../../../medatatheme/assets/icons/topics/white/11_blanco.svg");
const IconoHaciendayCreditoPublico = require("../../../../../../medatatheme/assets/icons/topics/white/12_blanco.svg");
const IconoInclusionSocialyReconciliacion = require("../../../../../../medatatheme/assets/icons/topics/white/13_blanco.svg");
const IconoJusticiayDerecho = require("../../../../../../medatatheme/assets/icons/topics/white/14_blanco.svg");
const IconoMapasNacionales = require("../../../../../../medatatheme/assets/icons/topics/white/15_blanco.svg");
const IconoMinasyEnergias = require("../../../../../../medatatheme/assets/icons/topics/white/16_blanco.svg");
const IconoOrdenamientoTerritorial = require("../../../../../../medatatheme/assets/icons/topics/white/17_blanco.svg");
const IconoOrganismosdeControl = require("../../../../../../medatatheme/assets/icons/topics/white/18_blanco.svg");
const IconoParticipacionCiudadana = require("../../../../../../medatatheme/assets/icons/topics/white/19_blanco.svg");
const IconoPresupuestosGubernamentales = require("../../../../../../medatatheme/assets/icons/topics/white/20_blanco.svg");
const IconoResultadosElectorales = require("../../../../../../medatatheme/assets/icons/topics/white/21_blanco.svg");
const IconoSaludyProteccionSocial = require("../../../../../../medatatheme/assets/icons/topics/white/22_blanco.svg");
const IconoSeguridadyDefensa = require("../../../../../../medatatheme/assets/icons/topics/white/23_blanco.svg");
const IconoTrabajo = require("../../../../../../medatatheme/assets/icons/topics/white/24_blanco.svg");
const IconoTransporte = require("../../../../../../medatatheme/assets/icons/topics/white/25_blanco.svg");
const IconoViviendaCiudadyTerritorio = require("../../../../../../medatatheme/assets/icons/topics/white/26_blanco.svg");

const IconoAgriculturayDesarrolloRuralBlack = require("../../../../../../medatatheme/assets/icons/topics/black/01_negro.svg");
const IconoAmbienteyDesarrolloSostenibleBlack = require("../../../../../../medatatheme/assets/icons/topics/black/02_negro.svg");
const IconoCienciaTecnologiaeInnovacionBlack = require("../../../../../../medatatheme/assets/icons/topics/black/03_negro.svg");
const IconoComercioIndustriayTurismoBlack = require("../../../../../../medatatheme/assets/icons/topics/black/04_negro.svg");
const IconoCulturaBlack = require("../../../../../../medatatheme/assets/icons/topics/black/05_negro.svg");
const IconoDeporteyRecreacionBlack = require("../../../../../../medatatheme/assets/icons/topics/black/06_negro.svg");
const IconoEconomiayFinanzasBlack = require("../../../../../../medatatheme/assets/icons/topics/black/07_negro.svg");
const IconoEducacionBlack = require("../../../../../../medatatheme/assets/icons/topics/black/08_negro.svg");
const IconoEstadisticasNacionalesBlack = require("../../../../../../medatatheme/assets/icons/topics/black/09_negro.svg");
const IconoFuncionPublicaBlack = require("../../../../../../medatatheme/assets/icons/topics/black/10_negro.svg");
const IconoGastosGubernamentalesBlack = require("../../../../../../medatatheme/assets/icons/topics/black/11_negro.svg");
const IconoHaciendayCreditoPublicoBlack = require("../../../../../../medatatheme/assets/icons/topics/black/12_negro.svg");
const IconoInclusionSocialyReconciliacionBlack = require("../../../../../../medatatheme/assets/icons/topics/black/13_negro.svg");
const IconoJusticiayDerechoBlack = require("../../../../../../medatatheme/assets/icons/topics/black/14_negro.svg");
const IconoMapasNacionalesBlack = require("../../../../../../medatatheme/assets/icons/topics/black/15_negro.svg");
const IconoMinasyEnergiasBlack = require("../../../../../../medatatheme/assets/icons/topics/black/16_negro.svg");
const IconoOrdenamientoTerritorialBlack = require("../../../../../../medatatheme/assets/icons/topics/black/17_negro.svg");
const IconoOrganismosdeControlBlack = require("../../../../../../medatatheme/assets/icons/topics/black/18_negro.svg");
const IconoParticipacionCiudadanaBlack = require("../../../../../../medatatheme/assets/icons/topics/black/19_negro.svg");
const IconoPresupuestosGubernamentalesBlack = require("../../../../../../medatatheme/assets/icons/topics/black/20_negro.svg");
const IconoResultadosElectoralesBlack = require("../../../../../../medatatheme/assets/icons/topics/black/21_negro.svg");
const IconoSaludyProteccionSocialBlack = require("../../../../../../medatatheme/assets/icons/topics/black/22_negro.svg");
const IconoSeguridadyDefensaBlack = require("../../../../../../medatatheme/assets/icons/topics/black/23_negro.svg");
const IconoTrabajoBlack = require("../../../../../../medatatheme/assets/icons/topics/black/24_negro.svg");
const IconoTransporteBlack = require("../../../../../../medatatheme/assets/icons/topics/black/25_negro.svg");
const IconoViviendaCiudadyTerritorioBlack = require("../../../../../../medatatheme/assets/icons/topics/black/26_negro.svg");

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
    case "Agricultura y Desarrollo Rural":
      icon = (color === 'white') ? IconoAgriculturayDesarrolloRural : IconoAgriculturayDesarrolloRuralBlack;
      break;
    
    case "Ambiente y Desarrollo Sostenible":
      icon = (color === 'white') ? IconoAmbienteyDesarrolloSostenible : IconoAmbienteyDesarrolloSostenibleBlack;
      break;
    
    case "Ciencia Tecnología e Innovación":
      icon = (color === 'white') ? IconoCienciaTecnologiaeInnovacion : IconoCienciaTecnologiaeInnovacionBlack;
      break;
    
    case "Comercio, Industria y Turismo":
      icon = (color === 'white') ? IconoComercioIndustriayTurismo : IconoComercioIndustriayTurismoBlack;
      break;
    
    case "Cultura":
      icon = (color === 'white') ? IconoCultura : IconoCulturaBlack;
      break;
    
    case "Deporte y Recreación":
      icon = (color === 'white') ? IconoDeporteyRecreacion : IconoDeporteyRecreacionBlack;
      break;
    
    case "Economía y Finanzas":
      icon = (color === 'white') ? IconoEconomiayFinanzas : IconoEconomiayFinanzasBlack;
      break;
    
    case "Educación":
      icon = (color === 'white') ? IconoEducacion : IconoEducacionBlack;
      break;
    
    case "Estadísticas Nacionales":
      icon = (color === 'white') ? IconoEstadisticasNacionales : IconoEstadisticasNacionalesBlack;
      break;
    
    case "Función Pública":
      icon = (color === 'white') ? IconoFuncionPublica : IconoFuncionPublicaBlack;
      break;
    
    case "Gastos Gubernamentales":
      icon = (color === 'white') ? IconoGastosGubernamentales : IconoGastosGubernamentalesBlack;
      break;
    
    case "Hacienda y Crédito Público":
      icon = (color === 'white') ? IconoHaciendayCreditoPublico : IconoHaciendayCreditoPublicoBlack;
      break;
    
    case "Inclusión Social y Reconciliación":
      icon = (color === 'white') ? IconoInclusionSocialyReconciliacion : IconoInclusionSocialyReconciliacionBlack;
      break;
    
    case "Justicia y Derecho":
      icon = (color === 'white') ? IconoJusticiayDerecho : IconoJusticiayDerechoBlack;
      break;
    
    case "Mapas Nacionales":
      icon = (color === 'white') ? IconoMapasNacionales : IconoMapasNacionalesBlack;
      break;
    
    case "Minas y Energías":
      icon = (color === 'white') ? IconoMinasyEnergias : IconoMinasyEnergiasBlack;
      break;
    
    case "Ordenamiento Territorial":
      icon = (color === 'white') ? IconoOrdenamientoTerritorial : IconoOrdenamientoTerritorialBlack;
      break;
    
    case "Organismos de Control":
      icon = (color === 'white') ? IconoOrganismosdeControl : IconoOrganismosdeControlBlack;
      break;
    
    case "Participación Ciudadana":
      icon = (color === 'white') ? IconoParticipacionCiudadana : IconoParticipacionCiudadanaBlack;
      break;
    
    case "Presupuestos Gubernamentales":
      icon = (color === 'white') ? IconoPresupuestosGubernamentales : IconoPresupuestosGubernamentalesBlack;
      break;
    
    case "Resultados Electorales":
      icon = (color === 'white') ? IconoResultadosElectorales : IconoResultadosElectoralesBlack;
      break;
    
    case "Salud y Protección Social":
      icon = (color === 'white') ? IconoSaludyProteccionSocial : IconoSaludyProteccionSocialBlack;
      break;
    
    case "Seguridad y Defensa":
      icon = (color === 'white') ? IconoSeguridadyDefensa : IconoSeguridadyDefensaBlack;
      break;
    
    case "Trabajo":
      icon = (color === 'white') ? IconoTrabajo : IconoTrabajoBlack;
      break;
    
    case "Transporte":
      icon = (color === 'white') ? IconoTransporte : IconoTransporteBlack;
      break;
    
    case "Vivienda, Ciudad y Territorio":
      icon = (color === 'white') ? IconoViviendaCiudadyTerritorio : IconoViviendaCiudadyTerritorioBlack;
      break;
    
    default:
      icon = (color === 'white') ? IconoMapasNacionales : IconoMapasNacionalesBlack;
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
