"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FooterComponent = ({
  loadingMore = false,
  hasMoreData = true,
  endMessage
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      height: 52
    }
  }, loadingMore && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.upActivityIndicator
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ActivityIndicator, {
    size: 28,
    color: "#f55d82"
  })), !hasMoreData && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.noMoreData
  }, endMessage || "No more date"));
};

const styles = _reactNative.StyleSheet.create({
  noMoreData: {
    textAlign: 'center',
    paddingVertical: 10
  },
  upActivityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8
  }
});

var _default = FooterComponent;
exports.default = _default;
//# sourceMappingURL=FooterComponent.js.map