'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _sdk = require('sdk');

var _sdk2 = _interopRequireDefault(_sdk);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _rules = require('./rules');

var _rules2 = _interopRequireDefault(_rules);

var LeanCloud = function LeanCloud(configs) {
  _classCallCheck(this, LeanCloud);

  if (!configs || !(configs.appId && configs.appKey)) throw new Error('leancloud.init() appId and appKey are both required');

  this.HOST = 'https://leancloud.cn';
  this.API_VERSION = '1.1';

  return new _sdk2['default'](this.HOST + '/' + this.API_VERSION + '/', _api2['default'], (0, _rules2['default'])(configs));
};

exports['default'] = LeanCloud;
module.exports = exports['default'];
//# sourceMappingURL=leancloud.js.map