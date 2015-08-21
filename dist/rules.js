'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (_ref) {
  var appId = _ref.appId;
  var appKey = _ref.appKey;
  var appSign = _ref.appSign;

  var ret = {};
  var headers = {
    'X-AVOSCloud-Application-Id': appId,
    'X-AVOSCloud-Request-Sign': appSign
  };['get', 'post', 'delete', 'put'].forEach(function (item) {
    return ret[item] = { headers: headers };
  });

  return ret;
};

module.exports = exports['default'];
//# sourceMappingURL=rules.js.map