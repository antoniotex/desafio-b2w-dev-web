/**
 * Método para extrair somente números de uma string qualquer e converter para number
 */
module.exports = {
  regexOnlyNumbers: (id) => parseInt(id.replace(/\D+/g, '')),
  convertStringToFloat: (string) => parseFloat(string)
}                                                    