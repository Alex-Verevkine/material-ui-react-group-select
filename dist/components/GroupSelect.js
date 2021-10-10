"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.weak-map.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.object.values.js");

require("core-js/modules/es.set.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.map.js");

var _react = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _iconsMaterial = require("@mui/icons-material");

var _types = require("@babel/types");

var _excluded = ["options", "values", "onChange", "label", "placeholder"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var icon = /*#__PURE__*/_react.default.createElement(_iconsMaterial.CheckBoxOutlineBlank, {
  fontSize: "small"
});

var checkedIcon = /*#__PURE__*/_react.default.createElement(_iconsMaterial.CheckBox, {
  fontSize: "small"
});

var GroupSelect = function GroupSelect(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$values = _ref.values,
      values = _ref$values === void 0 ? [] : _ref$values,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? _lodash.noop : _ref$onChange,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var notInitialRender = (0, _react.useRef)(false);

  var _useState = (0, _react.useState)(values),
      _useState2 = _slicedToArray(_useState, 2),
      selectedValues = _useState2[0],
      setSelectedValues = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      groupedOptions = _useState4[0],
      setGroupedOptions = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      groups = _useState6[0],
      setGroups = _useState6[1];

  (0, _react.useEffect)(function () {
    setGroupedOptions(options.filter(function (_ref2) {
      var groupRef = _ref2.groupRef;
      return groupRef;
    }).reduce(function (acc, option) {
      var _acc$option$groupRef;

      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, option.groupRef, (_acc$option$groupRef = acc[option.groupRef]) !== null && _acc$option$groupRef !== void 0 && _acc$option$groupRef.length ? [].concat(_toConsumableArray(acc[option.groupRef]), [option]) : [option]));
    }, {}));
    setGroups(options.filter(function (_ref3) {
      var groupId = _ref3.groupId;
      return groupId;
    }).reduce(function (acc, group) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, group.groupId, group));
    }, {}));
  }, options);
  (0, _react.useEffect)(function () {
    console.log("selectedValues", selectedValues);

    if (notInitialRender.current) {
      onChange(selectedValues);
    } else {
      notInitialRender.current = true;
    }
  }, [selectedValues.length]);

  var handleValuesChange = function handleValuesChange() {
    var selectedValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var reason = arguments.length > 1 ? arguments[1] : undefined;
    var details = arguments.length > 2 ? arguments[2] : undefined;
    console.log("handleValuesChange", selectedValues, reason, details);
    var updatedValues = selectedValues.filter(function (_ref4) {
      var groupId = _ref4.groupId,
          groupRef = _ref4.groupRef;
      return !groupId && !groupRef;
    });
    var selectedGroups = selectedValues.filter(function (_ref5) {
      var groupId = _ref5.groupId;
      return groupId;
    }).reduce(function (acc, group) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, group.groupId, group));
    }, {});
    var groupedSelectedSubElements = selectedValues.filter(function (_ref6) {
      var groupRef = _ref6.groupRef;
      return groupRef;
    }).reduce(function (acc, option) {
      var _acc$option$groupRef2;

      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, option.groupRef, (_acc$option$groupRef2 = acc[option.groupRef]) !== null && _acc$option$groupRef2 !== void 0 && _acc$option$groupRef2.length ? [].concat(_toConsumableArray(acc[option.groupRef]), [option]) : [option]));
    }, {});

    switch (reason) {
      case "selectOption":
        if ("groupId" in details.option) {
          var groupId = details.option.groupId;
          groupedSelectedSubElements[groupId] = groupedOptions[groupId];
        } else if ("groupRef" in details.option && groupedSelectedSubElements[details.option.groupRef].length === groupedOptions[details.option.groupRef].length) {
          var groupRef = details.option.groupRef;
          selectedGroups[groupRef] = groups[groupRef];
        }

        updatedValues.push.apply(updatedValues, _toConsumableArray(Object.values(selectedGroups)).concat(_toConsumableArray((0, _lodash.flatten)(Object.values(groupedSelectedSubElements)))));
        setSelectedValues(updatedValues);
        break;

      case "removeOption":
        if ("groupId" in details.option) {
          var _groupId = details.option.groupId;
          delete groupedSelectedSubElements[_groupId];
        } else if ("groupRef" in details.option && details.option.groupRef in selectedGroups) {
          var _groupRef = details.option.groupRef;
          delete selectedGroups[_groupRef];
        }

        updatedValues.push.apply(updatedValues, _toConsumableArray(Object.values(selectedGroups)).concat(_toConsumableArray((0, _lodash.flatten)(Object.values(groupedSelectedSubElements)))));
        setSelectedValues(updatedValues);
        break;

      default:
        setSelectedValues(selectedValues);
        break;
    }
  };

  return /*#__PURE__*/_react.default.createElement(_material.Autocomplete, _extends({
    multiple: true,
    id: "checkboxes-tags-demo",
    options: options,
    disableCloseOnSelect: true,
    value: selectedValues,
    onChange: function onChange(event, newValue, reason, details) {
      handleValuesChange(newValue, reason, details);
    },
    getOptionLabel: function getOptionLabel(option) {
      return option.groupId ? "All (".concat(option.title, ")") : option.title;
    },
    renderTags: function renderTags(renderValues, getTagProps) {
      var selectedGroups = new Set(renderValues.filter(function (_ref7) {
        var groupId = _ref7.groupId;
        return groupId;
      }).map(function (_ref8) {
        var groupId = _ref8.groupId;
        return groupId;
      }));
      return renderValues.filter(function (option) {
        return !selectedGroups.has(option.groupRef);
      }).map(function (option, index) {
        return /*#__PURE__*/_react.default.createElement(_material.Chip, _extends({
          variant: "outlined",
          key: option,
          label: option.groupId ? "".concat(option.title, " (All)") : option.title
        }, getTagProps({
          index: index
        })));
      });
    },
    renderOption: function renderOption(props, option, _ref9) {
      var selected = _ref9.selected;
      return /*#__PURE__*/_react.default.createElement("li", props, /*#__PURE__*/_react.default.createElement(_material.Grid, {
        container: true,
        alignItems: "center",
        style: _objectSpread({}, option.groupRef ? {
          paddingLeft: "24px"
        } : {})
      }, /*#__PURE__*/_react.default.createElement(_material.Checkbox, {
        icon: icon,
        checkedIcon: checkedIcon,
        style: {
          marginRight: 8
        },
        checked: selected
      }), /*#__PURE__*/_react.default.createElement(_material.Typography, {
        noWrap: true
      }, option.title)));
    },
    style: {
      width: 500
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react.default.createElement(_material.TextField, _extends({}, params, {
        variant: "outlined",
        label: label,
        placeholder: placeholder
      }));
    }
  }, restProps));
};

GroupSelect.propType = {
  options: _propTypes.default.array,
  onChange: _propTypes.default.func,
  selectedValues: _propTypes.default.array,
  label: _propTypes.default.string,
  placeholder: _propTypes.default.string
};
var _default = GroupSelect;
exports.default = _default;