const { getType } = require('mime')

module.exports = {
  process: (src, filePath) => {
    const mimetype = getType(filePath)

    const content = `data:${mimetype || ''};base64,${btoa(src)}`

    return 'module.exports = ' + JSON.stringify(content)
  },
}
