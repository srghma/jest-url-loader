const { getType } = require('mime')
const { base64encode } = require('nodejs-base64');

module.exports = {
  process: (src, filePath) => {
    const mimetype = getType(filePath)

    const src_ = new Buffer(src);

    const content = `data:${mimetype || ''};base64,${src_.toString('base64')}`

    return 'module.exports = ' + JSON.stringify(content)
  },
}
