const fetch = require('node-fetch')
const cheerio = require('cheerio')
const helpers = require('../helpers')

let $ = ''

/**
 * Função que busca a página do produto, de acordo com a URL passada como parâmetro
 * @param {String} pageUrl
 * @return {String}
 */
const getProduct = async pageUrl => {
  const userAgents = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'
  const response = await fetch(pageUrl, { headers: {'User-Agent': userAgents }})
  const result = await response.text()
  _scraping(result)
  return result
}
module.exports.getProduct = getProduct

/**
 * Função que recebe a página do produto, em formato de string, como parâmetro faz o scraping utilizando o Cheerio
 * @param {String} page
 * @return {Object}
 */
const _scraping = page => {
  $ = cheerio.load(page)

  const productData = {
    id: _getProductId(),
    breadcrumb: _getBreadcrumbs(),
    name: _getProductName(),
    img: _getProductImage(),
    seller: _getProductSeller(),
    price: _getProductPrice()
  }

  console.log(productData)

  return productData
}
module.exports._scraping = _scraping

/**
 * Função que busca o ID do produto
 * @return {Number}
 */
const _getProductId = () => {
  let spanTextUIs = []
  let id = ''
  $('span[class^="TextUI"]').each(function (i, e){
    spanTextUIs[i] = $(this).text()
    if(spanTextUIs[i].includes('(Cód')){
      id = spanTextUIs[i]
    }
  })
  return helpers.regexOnlyNumbers(id)
}
module.exports._getProductId = _getProductId

/**
 * Função que busca os breadcrumbs do produto
 * @return {Object}
 */
const _getBreadcrumbs = () => {
  let breadcrumbs = []
  $('.product-breadcrumb a[class^="BreadcrumbItem"]').each(function(i,e){
    breadcrumbs[i] = $(this).text()
  })
  return breadcrumbs
}
module.exports._getBreadcrumbs = _getBreadcrumbs

/**
 * Funcção que busca o nome (título) do produto
 * @return {String}
 */
const _getProductName = () => $('#product-name-default').text()
module.exports._getProductName = _getProductName

/**
 * Função que busca a imagem principal do produto
 * @return {String}
 */                
const _getProductImage = () => $('#image-gallery-product .image-gallery img').attr('src')
module.exports._getProductImage = _getProductImage

/**
 * Função que busca o vendedor do produto
 * @return {String}
 */                              
const _getProductSeller = () => $('.seller-name-container span[class^="seller"]').text().toLocaleLowerCase()
module.exports._getProductSeller = _getProductSeller

/**
 * Função que busca o preço do produto
 * @return {Number}
 */                                 
const _getProductPrice = () => helpers.convertStringToFloat($('.main-price span[class^="sales-price"]').text().replace("R$", "").replace(".", "").replace(",", ".").trim())
module.exports._getProductPrice = _getProductPrice
