'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _avoscloudSign = require('avoscloud-sign');

var _avoscloudSign2 = _interopRequireDefault(_avoscloudSign);

exports['default'] = function (_ref) {
  var appId = _ref.appId;
  var appKey = _ref.appKey;
  var masterKey = _ref.masterKey;

  var headers = {
    'X-AVOSCloud-Application-Id': appId,
    'X-AVOSCloud-Request-Sign': function XAVOSCloudRequestSign() {
      return masterKey ? (0, _avoscloudSign2['default'])(masterKey, true) : (0, _avoscloudSign2['default'])(appKey);
    }
  };

  return {
    all: {
      headers: headers
    }
  };
};

module.exports = exports['default'];
//# sourceMappingURL=rules.js.map