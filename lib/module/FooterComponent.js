import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const FooterComponent = ({
  loadingMore = false,
  hasMoreData = true,
  endMessage
}) => {
  return /*#__PURE__*/React.createElement(View, {
    style: {
      height: 52
    }
  }, loadingMore && /*#__PURE__*/React.createElement(View, {
    style: styles.upActivityIndicator
  }, /*#__PURE__*/React.createElement(ActivityIndicator, {
    size: 28,
    color: "#f55d82"
  })), !hasMoreData && /*#__PURE__*/React.createElement(Text, {
    style: styles.noMoreData
  }, endMessage || "No more date"));
};

const styles = StyleSheet.create({
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
export default FooterComponent;
//# sourceMappingURL=FooterComponent.js.map