const { getType } = require('mime')

module.exports = {
  process: (src, filePath) => {
    const mimetype = getType(filePath)

    const content = `data:${mimetype || ''};base64,${src.toString('base64')}`

    return 'module.exports = ' + JSON.stringify(content)
  },
}
