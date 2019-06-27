module.exports = regexOnlyNumbers = (id) => {
  return parseInt(id.replace(/\D+/g, ''))
}