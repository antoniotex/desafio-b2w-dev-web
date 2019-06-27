module.exports = {
  /**
  * Método para extrair somente números de uma string qualquer e converter para number
  */
  regexOnlyNumbers: (id) => parseInt(id.replace(/\D+/g, '')),
  /**
   * Método para converter uma string em number
   */
  convertStringToFloat: (string) => parseFloat(string)
}                                                    