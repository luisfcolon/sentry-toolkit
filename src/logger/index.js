import { Raven } from '../sentry';


class Logger {
  static error(message) {
    Raven.captureMessage(message, 'error');
  }

  static exception(message) {
    Raven.captureException(message);
  }

  static info(message) {
    Raven.captureMessage(message, 'info');
  }

  static warning(message) {
    Raven.captureMessage(message, 'warning');
  }
}

export default Logger;
