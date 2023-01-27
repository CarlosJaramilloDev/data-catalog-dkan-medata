"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJsPagination = _interopRequireDefault(require("react-js-pagination"));

var _SearchListItem = _interopRequireDefault(require("../../components/SearchListItem"));

var _SearchInput = _interopRequireDefault(require("../../components/SearchInput"));

var _SearchPaginationResults = _interopRequireDefault(require("../../components/SearchPaginationResults"));

var _SearchPageSizer = _interopRequireDefault(require("../../components/SearchPageSizer"));

var _search_defaults = require("../../services/search/search_defaults");

var _reactContentLoader = require("react-content-loader");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SearchContent = function SearchContent(_ref) {
  var sortOptions = _ref.sortOptions;
  var color = _ref.color || 'black';
  var _useContext = (0, _react.useContext)(_search_defaults.SearchDispatch),
      searchState = _useContext.searchState,
      dispatch = _useContext.dispatch,
      defaultFacets = _useContext.defaultFacets;

  var items = searchState.items,
      fulltext = searchState.fulltext,
      totalItems = searchState.totalItems,
      selectedFacets = searchState.selectedFacets,
      loading = searchState.loading;
  var facetTypes = Object.keys(defaultFacets);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-results-list movility-content"
  }, items && /*#__PURE__*/_react["default"].createElement(_SearchInput["default"], {
    placeholder: "¿Qué deseas buscar? Ej: Parque automotor",
    showSubmit: false,
    srOnly: true,
    value: fulltext,
    onChangeFunction: dispatch,
    onResetFunction: function onResetFunction() {
      return dispatch({
        type: 'RESET_FULLTEXT'
      });
    },
    resetContent: "Limpiar contenido"
  }),  /*#__PURE__*/_react["default"].createElement("p", {
    className: "paragraph paragraph--black margin-bottom-sm"
  }, 'Búsqueda, exploración y descarga de los conjuntos de datos de la Alcaldía de Medellín'),
  /*#__PURE__*/_react["default"].createElement("div", {
    className: 'results'
  }, /*#__PURE__*/_react["default"].createElement("p", {className: 'subtitle'}, getTotalInfo(totalItems)),
   /*#__PURE__*/_react["default"].createElement("div", {
    className: "results-order"
  }, /*#__PURE__*/_react["default"].createElement('span', null, "Ordenar por:"), /*#__PURE__*/_react["default"].createElement('select', {
/*     type: "select",
    name: "dc-search-list-sort",
    id: "dc-search-list-sort", */
    className: 'results-select',
    onChange: function onChange(e) {
      dispatch({
        type: 'UPDATE_SORT',
        data: {
          sort: e.target.value,
          'sort-order': e.target[e.target.selectedIndex].getAttribute("order")
        }
      });
    }
  }, sortOptions.map(function (sortOpt) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: sortOpt.field,
      value: sortOpt.field,
      order: sortOpt.order
    }, sortOpt.label);
  }))))
  , loading ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactContentLoader.List, null)) : /*#__PURE__*/_react["default"].createElement("div", { className: 'results-list'}, items.map(function (item) {
    return  /*#__PURE__*/_react["default"].createElement(_SearchListItem["default"], {
      key: item.identifier,
      item: item,
      color: color
    });
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-pagination-container"
  }, /*#__PURE__*/_react["default"].createElement(_SearchPaginationResults["default"], {
    total: Number(totalItems),
    pageSize: Number(searchState['page-size']),
    currentPage: Number(searchState.page)
  }), /*#__PURE__*/_react["default"].createElement(_SearchPageSizer["default"], {
    currentValue: Number(searchState['page-size']),
    resizeFunc: function resizeFunc(e) {
      return dispatch({
        type: 'UPDATE_PAGE_SIZE',
        data: {
          'page-size': e.target.value
        }
      });
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactJsPagination["default"], {
    hideDisabled: true,
    activePage: searchState.page,
    itemsCountPerPage: Number(searchState['page-size']),
    totalItemsCount: Number(totalItems),
    pageRangeDisplayed: 5,
    onChange: function onChange(e) {
      return dispatch({
        type: 'UPDATE_CURRENT_PAGE',
        data: {
          page: e
        }
      });
    }
  })));
  function getTotalInfo(total) {
    total = parseInt(total);
    var text = [];
    if(total === 0) {
      text.push('No se encontró información. Por favor realiza otra búsqueda');
    } else {
      text.push(total.toLocaleString('es'));
      text.push(total !== 1 ? 'resultados' : 'resultado');
      text.push(total !== 1 ? 'encontrados' : 'encontrado');
    }
    return text.join(" ");
  }
};

SearchContent.defaultProps = {
  sortOptions: [{
    field: 'modified',
    order: 'desc',
    label: 'Mas recientes'
  }, {
    field: 'title',
    order: 'asc',
    label: 'Alfabéticamente'
  }]
};
SearchContent.propTypes = {
  sortOptions: _propTypes["default"].arrayOf(_propTypes["default"].object)
};

var _default = SearchContent;
exports["default"] = _default;