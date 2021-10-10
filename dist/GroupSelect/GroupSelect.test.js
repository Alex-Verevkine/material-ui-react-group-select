"use strict";

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("regenerator-runtime/runtime.js");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _GroupSelect = _interopRequireDefault(require("./GroupSelect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var options = [{
  "title": "Test Element"
}, {
  "title": "Test Group Title",
  "groupId": "test-group"
}, {
  "title": "group option 1",
  "groupRef": "test-group"
}, {
  "title": "group option 2",
  "groupRef": "test-group"
}];
var autocompletePlaceholder = 'Select Options';
describe('GroupSelect Component', function () {
  test('should select a standard not grouped option', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var onChangeMock, targetOption, _render, findByPlaceholderText, autocomplete, _within, getByBodyText, option;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            onChangeMock = jest.fn();
            targetOption = options[0];
            _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_GroupSelect.default, {
              options: options,
              onChange: onChangeMock,
              placeholder: autocompletePlaceholder
            })), findByPlaceholderText = _render.findByPlaceholderText;
            _context.next = 5;
            return findByPlaceholderText(autocompletePlaceholder);

          case 5:
            autocomplete = _context.sent;

            _react2.fireEvent.mouseDown(autocomplete);

            _within = (0, _react2.within)(document.body), getByBodyText = _within.getByText;
            option = getByBodyText(targetOption.title);
            expect(option).toBeInTheDocument();

            _react2.fireEvent.click(option);

            expect(onChangeMock).toHaveBeenCalledTimes(1);
            expect(onChangeMock).toHaveBeenCalledWith([targetOption]);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('should select all group element when group heading option is selected', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var onChangeMock, groupHeadingOption, groupSubOptions, _render2, findByPlaceholderText, autocomplete, _within2, getByBodyText, option;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            onChangeMock = jest.fn();
            groupHeadingOption = options[1], groupSubOptions = options.slice(2);
            _render2 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_GroupSelect.default, {
              options: options,
              onChange: onChangeMock,
              placeholder: autocompletePlaceholder
            })), findByPlaceholderText = _render2.findByPlaceholderText;
            _context2.next = 5;
            return findByPlaceholderText(autocompletePlaceholder);

          case 5:
            autocomplete = _context2.sent;

            _react2.fireEvent.mouseDown(autocomplete);

            _within2 = (0, _react2.within)(document.body), getByBodyText = _within2.getByText;
            option = getByBodyText(groupHeadingOption.title);
            expect(option).toBeInTheDocument();

            _react2.fireEvent.click(option);

            expect(onChangeMock).toHaveBeenCalledTimes(1);
            expect(onChangeMock).toHaveBeenCalledWith([groupHeadingOption].concat(_toConsumableArray(groupSubOptions)));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  test('should select only first nested option from a group', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var onChangeMock, firstSubOption, _render3, findByPlaceholderText, autocomplete, _within3, getByBodyText, option;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            onChangeMock = jest.fn();
            firstSubOption = options[2];
            _render3 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_GroupSelect.default, {
              options: options,
              onChange: onChangeMock,
              placeholder: autocompletePlaceholder
            })), findByPlaceholderText = _render3.findByPlaceholderText;
            _context3.next = 5;
            return findByPlaceholderText(autocompletePlaceholder);

          case 5:
            autocomplete = _context3.sent;

            _react2.fireEvent.mouseDown(autocomplete);

            _within3 = (0, _react2.within)(document.body), getByBodyText = _within3.getByText;
            option = getByBodyText(firstSubOption.title);
            expect(option).toBeInTheDocument();

            _react2.fireEvent.click(option);

            expect(onChangeMock).toHaveBeenCalledTimes(1);
            expect(onChangeMock).toHaveBeenCalledWith([firstSubOption]);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  test('should select the entire group if all nested options were selected', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var onChangeMock, groupHeadingOption, groupSubOptions, _render4, findByPlaceholderText, autocomplete, _within4, getByBodyText;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            onChangeMock = jest.fn();
            groupHeadingOption = options[1], groupSubOptions = options.slice(2);
            _render4 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_GroupSelect.default, {
              options: options,
              onChange: onChangeMock,
              placeholder: autocompletePlaceholder
            })), findByPlaceholderText = _render4.findByPlaceholderText;
            _context4.next = 5;
            return findByPlaceholderText(autocompletePlaceholder);

          case 5:
            autocomplete = _context4.sent;

            _react2.fireEvent.mouseDown(autocomplete);

            _within4 = (0, _react2.within)(document.body), getByBodyText = _within4.getByText;
            groupSubOptions.forEach(function (targetOption) {
              var option = getByBodyText(targetOption.title);
              expect(option).toBeInTheDocument();

              _react2.fireEvent.click(option);
            });
            expect(onChangeMock).toHaveBeenCalledTimes(2);
            expect(onChangeMock).toHaveBeenLastCalledWith([groupHeadingOption].concat(_toConsumableArray(groupSubOptions)));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  test('should unselect the group heading option if all group was selected and one of sub elements was unselected', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var onChangeMock, groupHeadingOption, groupSubOptionOne, groupSubOptionTwo, _render5, findByPlaceholderText, autocomplete, _within5, getByBodyText, option;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            onChangeMock = jest.fn();
            groupHeadingOption = options[1], groupSubOptionOne = options[2], groupSubOptionTwo = options[3];
            _render5 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_GroupSelect.default, {
              options: options,
              values: [groupHeadingOption, groupSubOptionOne, groupSubOptionTwo],
              onChange: onChangeMock,
              placeholder: autocompletePlaceholder
            })), findByPlaceholderText = _render5.findByPlaceholderText;
            _context5.next = 5;
            return findByPlaceholderText(autocompletePlaceholder);

          case 5:
            autocomplete = _context5.sent;

            _react2.fireEvent.mouseDown(autocomplete);

            _within5 = (0, _react2.within)(document.body), getByBodyText = _within5.getByText;
            option = getByBodyText(groupSubOptionOne.title);
            expect(option).toBeInTheDocument();

            _react2.fireEvent.click(option);

            expect(onChangeMock).toHaveBeenCalledTimes(1);
            expect(onChangeMock).toHaveBeenLastCalledWith([groupSubOptionTwo]);

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
});