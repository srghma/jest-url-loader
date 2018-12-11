const { process } = require('../')
const { base64encode } = require('nodejs-base64');

describe('jest-url-loader', () => {
  it('works as expected', () => {
    // copied from http://png-pixel.com/
    const onePixelBase64 =
      'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=='

    const actual = process(base64encode(onePixelBase64), '/app/pixel.png')

    expect(actual).toEqual(
      `module.exports = \"data:image/png;base64,${onePixelBase64}\"`
    )
  })
})
