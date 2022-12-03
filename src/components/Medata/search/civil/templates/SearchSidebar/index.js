"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _SearchFacets = _interopRequireDefault(require("../../components/SearchFacets"));

var _search_defaults = require("../../services/search/search_defaults");

var _reactContentLoader = require("react-content-loader");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SearchSidebar = function SearchSidebar(_ref) {

  var _useContext = (0, _react.useContext)(_search_defaults.SearchDispatch),
      searchState = _useContext.searchState,
      dispatch = _useContext.dispatch,
      defaultFacets = _useContext.defaultFacets;

  var facetsResults = searchState.facetsResults,
      loading = searchState.loading;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-search-sidebar sidenav"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-search-sidebar-options"
  }, loading ? /*#__PURE__*/_react["default"].createElement(_reactContentLoader.BulletList, null) : facetsResults && facetsResults.length && /*#__PURE__*/_react["default"].createElement(_SearchFacets["default"], {
    facetsConfig: defaultFacets,
    facetsResults: facetsResults,
    selectedFacets: searchState.selectedFacets,
    dispatch: dispatch,
  })));
};

var _default = SearchSidebar;
exports["default"] = _default;