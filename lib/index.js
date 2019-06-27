const fetch = require('node-fetch')
const cheerio = require('cheerio')
const regexOnlyNumbers = require('../helpers')

let $ = ''


/**
 * Função que busca a página do produto, de acordo com o parâmetro passado
 */
module.exports = getProduct = async (pageUrl) => {
  const userAgents = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'
  try{
    fetch(pageUrl, { headers: {'User-Agent': userAgents }})
     .then(productPage => productPage.text())
     .then(productBody => _scraping(productBody))
  }
  catch(error){
    console.log(error)
  }
}

/**
 * Função que recebe a página do produto, em formato de string, como parâmetro faz o scraping utilizando o Cheerio
 */
const _scraping = (page) => {
  $ = cheerio.load(page)

  const productData = {
    id: regexOnlyNumbers(id = _getProductId()),
    breadcrumb: _getBreadcrumbs(),
    name: _getProductName(),
    img: _getProductImage(),
    seller: _getProductSeller(),
    price: _getProductPrice()
  }

  console.log(productData)
}

/**
 * Função que busca o ID do produto utilizando o Cheerio
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
  return id
}

const _getBreadcrumbs = () => {
  let breadcrumbs = []
  $('.product-breadcrumb a[class^="BreadcrumbItem"]').each(function(i,e){
    breadcrumbs[i] = $(this).text()
  })
  return breadcrumbs
}

const _getProductName = () => $('#product-name-default')
                               .text()

const _getProductImage = () => $('#image-gallery-product .image-gallery img')
                               .attr('src')

const _getProductSeller = () => $('.seller-name span')
                                 .html()
                                 .toLocaleLowerCase()

const _getProductPrice = () => $('.main-price span')
                               .html()
