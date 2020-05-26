/* global describe it expect */

/**
 * Constants
 */
import config from './config'

/**
 * TESTS
 */
describe('App config', () => {
  it('should have the good values', () => {
    const expectedValues = {
      APP_DEFAULT_LANGUAGE: 'en',
      APP_MAINTENANCE: false,
    }

    expect(config).toEqual(expectedValues)
  })
})
