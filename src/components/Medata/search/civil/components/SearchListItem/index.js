"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getUniqueFormats = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excerpts = _interopRequireDefault(require("excerpts"));

var _TopicIcon = _interopRequireDefault(require("../../templates/TopicIcon"));

var _DataIcon = _interopRequireDefault(require("../DataIcon"));

var _Text = _interopRequireDefault(require("../Text"));

var _router = require("@reach/router");

var _lodash = require("lodash");

/* eslint-disable */
var SearchListItem = function SearchListItem(_ref) {
  console.log(`Ref: ${JSON.stringify(_ref)}`);
  console.log(`Item: ${JSON.stringify(_ref.item)}`);
  var className = _ref.className,
      item = _ref.item;
  var ref = item.ref,
      title = item.title,
      description = item.description,
      publisher = item.publisher,
      format = item.format,
      theme = item.theme,
      identifier = item.identifier;

  function formats(distribution) {
    if (!distribution) {
      return null;
    }

    if ((0, _typeof2["default"])(distribution) === 'object' || Array.isArray(distribution)) {
      var distributionWithUniqueFormats = getUniqueFormats(Object.entries(distribution));
      var counted = (0, _lodash.countBy)(distribution, function (d) {
        return d.format;
      });
      return distributionWithUniqueFormats.map(function (dist) {
        var type = dist.mediaType ? dist.mediaType.split('/') : '';
        var backup = type ? type : 'data';
        var format = dist.format ? dist.format : backup;
        return /*#__PURE__*/_react["default"].createElement("div", {
          title: "format: ".concat(dist.format),
          key: "dist-id-".concat(identifier, "-").concat(Math.random() * 10),
          className: "label",
          "data-format": format
        }, counted[format], "x ", format);
      });
    }

    return null;
  }

  ;

  function themes(theme) {
    if (!theme) {
      return null;
    } else {
      return theme.map(function (topic, idx) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "dc-topic-wrapper",
          key: idx
        }, /*#__PURE__*/_react["default"].createElement(_TopicIcon["default"], {
          title: topic,
          height: 16,
          width: 16
        }), topic);
      });
    }
  }

  function publishers(publisher) {
    if (!publisher) {
      return null;
    } else {
      return /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_DataIcon["default"], {
        icon: "group",
        height: 20,
        width: 20
      }), publisher);
    }
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, /*#__PURE__*/_react["default"].createElement("div", { className: 'results-card-header'}, /*#__PURE__*/_react["default"].createElement('p', {
    className: 'title title--primary'
  }, title),  /*#__PURE__*/_react["default"].createElement('p', {
    className: 'text text-primary'
  }, /*#__PURE__*/_react["default"].createElement(_router.Link, {
    to: ref
  },  /*#__PURE__*/_react["default"].createElement('i', {
    className: 'fa-solid fa-eye'
  }), ' Ver Informe'))), 
   /*#__PURE__*/_react["default"].createElement('div', {
    className: 'results-card-body'
  }, description && /*#__PURE__*/_react["default"].createElement("p", {
    className: "text text--black margin-bottom"
  }, /*#__PURE__*/_react["default"].createElement(_Text["default"], null, (0, _excerpts["default"])(description, {
    words: 35
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "results-data"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "results-headings"
  },  /*#__PURE__*/_react["default"].createElement('p', null, "Última modificación"),  /*#__PURE__*/_react["default"].createElement('p', null, "Vistas"),  /*#__PURE__*/_react["default"].createElement('p', null, "Descargas"),  /*#__PURE__*/_react["default"].createElement('p', null, "Formato")),
  /*#__PURE__*/_react["default"].createElement("div", {
    className: "results-info"
  },  /*#__PURE__*/_react["default"].createElement('p', null, "4 Nov/ 2022"),  /*#__PURE__*/_react["default"].createElement('p', null, "2000"),  /*#__PURE__*/_react["default"].createElement('p', null, "822"),  /*#__PURE__*/_react["default"].createElement('p', null, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa-solid fa-file-csv"
  }))),
  theme && /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-item-theme"
  }, themes(theme))), format && /*#__PURE__*/_react["default"].createElement("div", {
    className: "format-types"
  }, formats(format))));
};

var getUniqueFormats = function getUniqueFormats(formats) {
  var unique = [];
  return formats.reduce(function (a, b) {
    if (unique.indexOf(b[1].format) === -1) {
      unique.push(b[1].format);
      a.push(b[1]);
    }

    return a;
  }, []);
};

exports.getUniqueFormats = getUniqueFormats;
SearchListItem.defaultProps = {
  className: 'results-card'
};
SearchListItem.propTypes = {
  className: _propTypes["default"].string,
  item: _propTypes["default"].objectOf(_propTypes["default"].any).isRequired
};
var _default = SearchListItem;
exports["default"] = _default;