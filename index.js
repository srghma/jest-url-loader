const { getType } = require('mime')
const { base64encode } = require('nodejs-base64');

module.exports = {
  process: (src, filePath) => {
    const mimetype = getType(filePath)

    console.log('src', src)

    const content = `data:${mimetype || ''};base64,${base64encode(src)}`

    return 'module.exports = ' + JSON.stringify(content)
  },
}
