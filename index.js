const { getType } = require('mime')
const { base64decode } = require('nodejs-base64');

module.exports = {
  process: (src, filePath) => {
    const mimetype = getType(filePath)

    const content = `data:${mimetype || ''};base64,${base64decode(src)}`

    return 'module.exports = ' + JSON.stringify(content)
  },
}
