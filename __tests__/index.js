const { process } = require('../')
const { base64decode, base64encode } = require('nodejs-base64');

describe('jest-url-loader', () => {
  it('works as expected', () => {
    // copied from http://png-pixel.com/
    const content = 'asdfasdf'

    const actual = process(content, '/app/pixel.png')

    const expected = `module.exports = \"data:image/png;base64,${base64encode(content)}\"`
    expect(actual).toEqual(expected)
  })
})
