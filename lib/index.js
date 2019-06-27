const fetch = require('node-fetch')
const cheerio = require('cheerio')
const regexOnlyNumbers = require('../helpers')

const base = {
  product: 'https://www.americanas.com.br/produto/133718358/',
  userAgents: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'
}

/**
 * Função que busca a página do produto, de acordo com o parâmetro passado
 */
const getProduct = async (page) => {
  try{
    fetch(base.product, { headers: {'User-Agent': base.userAgents }})
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
  const $ = cheerio.load(page)
  let spanTextUIs = []
  let id = Number
  $('span[class^="TextUI"]').each(function (i, e){
    spanTextUIs[i] = $(this).text()
    if(spanTextUIs[i].includes('(Cód')){
      id = spanTextUIs[i]
    }
  })

  const productData = {
    id: regexOnlyNumbers(id)
  }

  console.log(productData)
}


getProduct()
