"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sentry = {
  publicDsn: process.env.SENTRY_PUBLIC_DSN,
  environment: process.env.ENV
};

exports.default = sentry;