import has from 'ohas';

import config from './index';


describe('Sentry Configration File', () => {
  it('has the expected configuration keys', () => {
    expect(has(config, 'publicDsn')).toEqual(true);
    expect(has(config, 'environment')).toEqual(true);
  })
});
