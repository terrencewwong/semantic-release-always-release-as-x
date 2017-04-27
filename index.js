const SUPPORTED_TYPES = [
  'major', 'premajor', 'minor', 'preminor', 'patch', 'prepatch', 'prerelease'
]

module.exports = function (pluginConfig, _, cb) {
  const {type} = pluginConfig

  if (!SUPPORTED_TYPES.includes(type)) {
    cb(new Error(`Unsupported type: ${type}`), type)
    return
  }

  cb(null, type)
}
