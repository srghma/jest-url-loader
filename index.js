const { getType } = require('mime')
const { base64encode } = require('nodejs-base64');

module.exports = {
  process: (src, filePath) => {
    const mimetype = getType(filePath)

    const buffer = Buffer.from(str.toString(), 'binary');

    const encoded = buffer.toString('base64')

    const content = `data:${mimetype || ''};base64,${encoded}`

    return 'module.exports = ' + JSON.stringify(content)
  },
}
