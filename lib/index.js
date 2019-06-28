const fetch = require('node-fetch')
const cheerio = require('cheerio')
const helpers = require('../helpers')

let $ = ''
const base = {
  product1: 'https://www.americanas.com.br/produto/133718358/',
  product2: 'https://www.americanas.com.br/produto/133718278',
  product3: 'https://www.americanas.com.br/produto/13474540'
}


/**
 * Função que busca a página do produto, de acordo com o parâmetro passado
 */
module.exports = getProduct = async (pageUrl) => {
  let productData = ''
  const userAgents = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'
  try{
    await fetch(pageUrl, { headers: {'User-Agent': userAgents }})
     .then(productPage => productPage.text())
     .then(productBody => productData = productBody)
  }
  catch(error){
    return 0
  }
  finally{
    // _scraping(productData)
    return productData
  }
}

/**
 * Função que recebe a página do produto, em formato de string, como parâmetro faz o scraping utilizando o Cheerio
 */
module.exports = _scraping = (page) => {
  $ = cheerio.load(page)

  const productData = {
    id: _getProductId(),
    breadcrumb: _getBreadcrumbs(),
    name: _getProductName(),
    img: _getProductImage(),
    seller: _getProductSeller(),
    price: _getProductPrice()
  }

  // console.log(productData)

  return productData
}

/**
 * Função que busca o ID do produto
 */
module.exports = _getProductId = () => {
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

getProduct(base.product1)

/**
 * Função que busca os breadcrumbs do produto
 */
module.exports = _getBreadcrumbs = () => {
  let breadcrumbs = []
  $('.product-breadcrumb a[class^="BreadcrumbItem"]').each(function(i,e){
    breadcrumbs[i] = $(this).text()
  })
  return breadcrumbs
}

/**
 * Funcção que busca o nome (título) do produto
 */
module.exports = _getProductName = () => $('#product-name-default').text()

/**
 * Função que busca a imagem principal do produto
 */                
module.exports = _getProductImage = () => $('#image-gallery-product .image-gallery img').attr('src')

/**
 * Função que busca o vendedor do produto
 */                              
module.exports = _getProductSeller = () => $('.seller-name-container span[class^="seller"]').text().toLocaleLowerCase()

/**
 * Função que busca o preço do produto
 */                                 
module.exports = _getProductPrice = () => helpers.convertStringToFloat($('.main-price span[class^="sales-price"]').text().replace("R$", "").replace(".", "").replace(",", ".").trim())
