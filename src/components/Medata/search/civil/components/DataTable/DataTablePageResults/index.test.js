"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require("."));

describe('<DataTablePageResults />', function () {
  var defaultWrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_["default"], {
    total: 100,
    pageSize: 10,
    currentPage: 0
  }));
  var customWrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_["default"], {
    total: 100,
    pageSize: 10,
    currentPage: 4
  }));
  var viewingWrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_["default"], {
    total: 100,
    pageSize: 10,
    currentPage: 4,
    viewing: true
  }));
  it('renders correct initial results', function () {
    expect(defaultWrapper.find('p').text()).toBe('1 - 10 of 100 rows');
  });
  it('renders correct results on subsequent pages', function () {
    expect(customWrapper.find('p').text()).toBe('41 - 50 of 100 rows');
  });
  it('Correctly displays appended viewing to results list', function () {
    expect(viewingWrapper.find('p').text()).toBe('Viewing 41 - 50 of 100 rows');
  });
});