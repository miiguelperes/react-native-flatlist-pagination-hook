"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _FooterComponent = _interopRequireDefault(require("./FooterComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const usePagination = (pageSize = 10) => {
  const [loadingMore, setLoadingMore] = _react.default.useState(false);

  const [pageIndex, setPageIndex] = _react.default.useState(0);

  const [lastPageSize, setLastPageSize] = _react.default.useState(0);

  const [data, setData] = _react.default.useState([]);

  const onEndReached = () => {
    if (lastPageSize === pageSize) {
      setPageIndex(pageIndex + 1);
      setLoadingMore(true);
    }
  };

  const addData = pageData => {
    setData([...data, ...pageData]);
    setLastPageSize((pageData === null || pageData === void 0 ? void 0 : pageData.length) || 0);
    setLoadingMore(false);
  };

  const resetData = data => {
    setData(data);
    setLastPageSize((data === null || data === void 0 ? void 0 : data.length) || 0);
    setLoadingMore(false);
  };

  const hasMoreData = !(data.length > 0 && lastPageSize !== pageSize);
  return {
    data,
    resetData,
    addData,
    onEndReached,
    loadingMore,
    pageIndex,
    ListFooterComponent: () => /*#__PURE__*/_react.default.createElement(_FooterComponent.default, {
      loadingMore: loadingMore,
      hasMoreData: hasMoreData
    }),
    hasMoreData
  };
};

var _default = usePagination;
exports.default = _default;
//# sourceMappingURL=index.js.map