'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindSentryToErrorConsole = exports.Raven = undefined;

var _ravenJs = require('raven-js');

var _ravenJs2 = _interopRequireDefault(_ravenJs);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!_ravenJs2.default._isRavenInstalled) {
  _ravenJs2.default.config(_config2.default.publicDsn, {
    collectWindowErrors: true,
    fetchContext: true,
    linesOfContext: 100,
    environment: _config2.default.environment
  }).install();
}

function bindSentryToErrorConsole() {
  var originalConsoleError = console.error;

  function sentryErrorConsole() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var message = Array.prototype.slice.apply(args).join(' ');
    _ravenJs2.default.captureException(message);

    if (originalConsoleError.apply) {
      originalConsoleError.apply(this, args);
    } else if (originalConsoleError.call) {
      originalConsoleError.call(console, message);
    } else {
      originalConsoleError(message);
    }
  }

  console.error = sentryErrorConsole;
}

exports.Raven = _ravenJs2.default;
exports.bindSentryToErrorConsole = bindSentryToErrorConsole;