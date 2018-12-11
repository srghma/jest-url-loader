const { getType } = require('mime')
const fs = require('fs');

module.exports = {
  process: (_src, filePath, config) => {
    const mimetype = getType(filePath)
    const imageAsBase64 = fs.readFileSync(filePath, 'base64');

    const content = `data:${mimetype || ''};base64,${imageAsBase64}`

    return 'module.exports = ' + JSON.stringify(content)
  },
}
