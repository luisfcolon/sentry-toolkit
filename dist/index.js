'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logger = exports.bindSentryToErrorConsole = undefined;

var _sentry = require('sentry');

var _logger = require('logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.bindSentryToErrorConsole = _sentry.bindSentryToErrorConsole;
exports.Logger = _logger2.default;