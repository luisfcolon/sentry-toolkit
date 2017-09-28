import Raven from 'raven-js';

import config from '../config';


if (!Raven._isRavenInstalled) {
  Raven.config(config.publicDsn, {
    collectWindowErrors: true,
    fetchContext: true,
    linesOfContext: 100,
    environment: config.environment,
  }).install();
}

function bindSentryToErrorConsole() {
  const originalConsoleError = console.error;

  function sentryErrorConsole(...args) {
    const message = Array.prototype.slice.apply(args).join(' ');
    Raven.captureException(message);

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

export { Raven, bindSentryToErrorConsole };
