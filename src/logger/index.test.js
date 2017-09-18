import Raven from 'raven-js';
import sinon from 'sinon';

import log from './index';


describe('Sentry Log Wrapper', () => {
  let captureMessageSpy;

  beforeEach(() => {
    captureMessageSpy = sinon.spy(Raven, 'captureMessage');
  });

  afterEach(() => {
    Raven.captureMessage.restore();
  });

  it('captures an exception and sends it to Sentry', () => {
    const captureExceptionSpy = sinon.spy(Raven, 'captureException');

    log.exception('Uncaught exception logged');

    expect(captureExceptionSpy.calledOnce).toEqual(true);
    expect(captureExceptionSpy.calledWith('Uncaught exception logged')).toEqual(true);
  });

  it('sends an info message to sentry', () => {
    log.info('Some info message');

    expect(captureMessageSpy.calledOnce).toEqual(true);
    expect(captureMessageSpy.calledWith('Some info message', 'info')).toEqual(true);
  });

  it('sends an error message to sentry', () => {
    log.error('Some error message');

    expect(captureMessageSpy.calledOnce).toEqual(true);
    expect(captureMessageSpy.calledWith('Some error message', 'error')).toEqual(true);
  });

  it('sends a warning message to sentry', () => {
    log.warning('Some warning message');

    expect(captureMessageSpy.calledOnce).toEqual(true);
    expect(captureMessageSpy.calledWith('Some warning message', 'warning')).toEqual(true);
  });
});
