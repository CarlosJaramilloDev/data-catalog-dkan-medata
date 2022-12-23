"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormatIcon = _interopRequireDefault(require("../FormatIcon"));

var _Text = _interopRequireDefault(require("../Text"));

var FileDownload = function FileDownload(_ref) {
  var title = _ref.title,
      format = _ref.format,
      downloadURL = _ref.downloadURL,
      hasPreview = _ref.hasPreview,
      description = _ref.description;
  var label = title || format;
  const buttonStyle = (!hasPreview) ? { justifyContent: 'flex-start'} : {};

  console.log(_ref);
  console.log(buttonStyle);

  //const finalUrl = (downloadURL.indexOf('http://') >= 0 ) ? downloadURL.replace('http://', 'https://') : downloadURL;
  const finalUrl = downloadURL;

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "data-actions",
    style: buttonStyle
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: finalUrl,
    title: label,
    className: 'button button-secondary'
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: 'fa-solid fa-download'
  }),' ', label), description && /*#__PURE__*/_react["default"].createElement('span', {
    className: 'paragraph paragraph--black'
  }, ' ', description));
};

FileDownload.defaultProps = {
  description: '',
  title: '',
  hasPreview: true
};
FileDownload.propTypes = {
  title: _propTypes["default"].string,
  format: _propTypes["default"].string.isRequired,
  downloadURL: _propTypes["default"].string.isRequired,
  description: _propTypes["default"].string,
  hasPreview: _propTypes["default"].boolean
};
var _default = FileDownload;
exports["default"] = _default;