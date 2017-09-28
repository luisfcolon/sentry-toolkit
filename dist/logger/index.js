'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sentry = require('../sentry');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, null, [{
    key: 'error',
    value: function error(message) {
      _sentry.Raven.captureMessage(message, 'error');
    }
  }, {
    key: 'exception',
    value: function exception(message) {
      _sentry.Raven.captureException(message);
    }
  }, {
    key: 'info',
    value: function info(message) {
      _sentry.Raven.captureMessage(message, 'info');
    }
  }, {
    key: 'warning',
    value: function warning(message) {
      _sentry.Raven.captureMessage(message, 'warning');
    }
  }]);

  return Logger;
}();

exports.default = Logger;