const dimension = '(-1|\\d+)'
const regExp = new RegExp(`^${dimension}(?:,${dimension})?$`)

function parseDimension (dimension) {
  if (dimension === '-1') {
    return '-2'
  }
  const result = parseInt(dimension)
  return isNaN(result) === true ? '-2' : `${result}`
}

module.exports = function (string) {
  const matches = string.match(regExp)
  if (matches === null) {
    throw new Error('Expected <width>,<height>')
  }
  const options = matches.slice(1)
  return {
    width: parseDimension(options[0]),
    height: parseDimension(options[1])
  }
}
