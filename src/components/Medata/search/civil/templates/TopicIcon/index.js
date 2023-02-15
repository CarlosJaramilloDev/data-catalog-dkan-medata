"use strict";

const IconoAgriculturayDesarrolloRural = require("../../../../../../medatatheme/assets/icons/topics/white/1.svg");
const IconoAmbienteyDesarrolloSostenible = require("../../../../../../medatatheme/assets/icons/topics/white/2.svg");
const IconoCienciaTecnologiaeInnovacion = require("../../../../../../medatatheme/assets/icons/topics/white/3.svg");
const IconoComercioIndustriayTurismo = require("../../../../../../medatatheme/assets/icons/topics/white/4.svg");
const IconoCultura = require("../../../../../../medatatheme/assets/icons/topics/white/5.svg");
const IconoDeporteyRecreacion = require("../../../../../../medatatheme/assets/icons/topics/white/6.svg");
const IconoEconomiayFinanzas = require("../../../../../../medatatheme/assets/icons/topics/white/7.svg");
const IconoEducacion = require("../../../../../../medatatheme/assets/icons/topics/white/8.svg");
const IconoEstadisticasNacionales = require("../../../../../../medatatheme/assets/icons/topics/white/9.svg");
const IconoFuncionPublica = require("../../../../../../medatatheme/assets/icons/topics/white/10.svg");
const IconoGastosGubernamentales = require("../../../../../../medatatheme/assets/icons/topics/white/11.svg");
const IconoHaciendayCreditoPublico = require("../../../../../../medatatheme/assets/icons/topics/white/12.svg");
const IconoInclusionSocialyReconciliacion = require("../../../../../../medatatheme/assets/icons/topics/white/13.svg");
const IconoJusticiayDerecho = require("../../../../../../medatatheme/assets/icons/topics/white/14.svg");
const IconoMapasNacionales = require("../../../../../../medatatheme/assets/icons/topics/white/15.svg");
const IconoMinasyEnergias = require("../../../../../../medatatheme/assets/icons/topics/white/16.svg");
const IconoOrdenamientoTerritorial = require("../../../../../../medatatheme/assets/icons/topics/white/17.svg");
const IconoOrganismosdeControl = require("../../../../../../medatatheme/assets/icons/topics/white/18.svg");
const IconoParticipacionCiudadana = require("../../../../../../medatatheme/assets/icons/topics/white/19.svg");
const IconoPresupuestosGubernamentales = require("../../../../../../medatatheme/assets/icons/topics/white/20.svg");
const IconoResultadosElectorales = require("../../../../../../medatatheme/assets/icons/topics/white/21.svg");
const IconoSaludyProteccionSocial = require("../../../../../../medatatheme/assets/icons/topics/white/22.svg");
const IconoSeguridadyDefensa = require("../../../../../../medatatheme/assets/icons/topics/white/23.svg");
const IconoTrabajo = require("../../../../../../medatatheme/assets/icons/topics/white/24.svg");
const IconoTransporte = require("../../../../../../medatatheme/assets/icons/topics/white/25.svg");
const IconoViviendaCiudadyTerritorio = require("../../../../../../medatatheme/assets/icons/topics/white/26.svg");
const IconoGeneral = require("../../../../../../medatatheme/assets/icons/topics/white/g.svg");

const IconoAgriculturayDesarrolloRuralBlack = require("../../../../../../medatatheme/assets/icons/topics/black/1.svg");
const IconoAmbienteyDesarrolloSostenibleBlack = require("../../../../../../medatatheme/assets/icons/topics/black/2.svg");
const IconoCienciaTecnologiaeInnovacionBlack = require("../../../../../../medatatheme/assets/icons/topics/black/3.svg");
const IconoComercioIndustriayTurismoBlack = require("../../../../../../medatatheme/assets/icons/topics/black/4.svg");
const IconoCulturaBlack = require("../../../../../../medatatheme/assets/icons/topics/black/5.svg");
const IconoDeporteyRecreacionBlack = require("../../../../../../medatatheme/assets/icons/topics/black/6.svg");
const IconoEconomiayFinanzasBlack = require("../../../../../../medatatheme/assets/icons/topics/black/7.svg");
const IconoEducacionBlack = require("../../../../../../medatatheme/assets/icons/topics/black/8.svg");
const IconoEstadisticasNacionalesBlack = require("../../../../../../medatatheme/assets/icons/topics/black/9.svg");
const IconoFuncionPublicaBlack = require("../../../../../../medatatheme/assets/icons/topics/black/10.svg");
const IconoGastosGubernamentalesBlack = require("../../../../../../medatatheme/assets/icons/topics/black/11.svg");
const IconoHaciendayCreditoPublicoBlack = require("../../../../../../medatatheme/assets/icons/topics/black/12.svg");
const IconoInclusionSocialyReconciliacionBlack = require("../../../../../../medatatheme/assets/icons/topics/black/13.svg");
const IconoJusticiayDerechoBlack = require("../../../../../../medatatheme/assets/icons/topics/black/14.svg");
const IconoMapasNacionalesBlack = require("../../../../../../medatatheme/assets/icons/topics/black/15.svg");
const IconoMinasyEnergiasBlack = require("../../../../../../medatatheme/assets/icons/topics/black/16.svg");
const IconoOrdenamientoTerritorialBlack = require("../../../../../../medatatheme/assets/icons/topics/black/17.svg");
const IconoOrganismosdeControlBlack = require("../../../../../../medatatheme/assets/icons/topics/black/18.svg");
const IconoParticipacionCiudadanaBlack = require("../../../../../../medatatheme/assets/icons/topics/black/19.svg");
const IconoPresupuestosGubernamentalesBlack = require("../../../../../../medatatheme/assets/icons/topics/black/20.svg");
const IconoResultadosElectoralesBlack = require("../../../../../../medatatheme/assets/icons/topics/black/21.svg");
const IconoSaludyProteccionSocialBlack = require("../../../../../../medatatheme/assets/icons/topics/black/22.svg");
const IconoSeguridadyDefensaBlack = require("../../../../../../medatatheme/assets/icons/topics/black/23.svg");
const IconoTrabajoBlack = require("../../../../../../medatatheme/assets/icons/topics/black/24.svg");
const IconoTransporteBlack = require("../../../../../../medatatheme/assets/icons/topics/black/25.svg");
const IconoViviendaCiudadyTerritorioBlack = require("../../../../../../medatatheme/assets/icons/topics/black/26.svg");
const IconoGeneralBlack = require("../../../../../../medatatheme/assets/icons/topics/black/g.svg");

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
      icon = (color === 'white') ? IconoGeneral : IconoGeneralBlack;
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
