import React from 'react';
import FooterComponent from "./FooterComponent";

const usePagination = (pageSize = 10) => {
  const [loadingMore, setLoadingMore] = React.useState(false);
  const [pageIndex, setPageIndex] = React.useState(0);
  const [lastPageSize, setLastPageSize] = React.useState(0);
  const [data, setData] = React.useState([]);

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
    ListFooterComponent: () => /*#__PURE__*/React.createElement(FooterComponent, {
      loadingMore: loadingMore,
      hasMoreData: hasMoreData
    }),
    hasMoreData
  };
};

export default usePagination;
//# sourceMappingURL=index.js.map