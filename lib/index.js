const fetch = require('node-fetch')
const cheerio = require('cheerio')

const base = {
  product: 'https://www.americanas.com.br/produto/133718358/',
  userAgents: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'
}

const getProduct = async () => {
  try{
    fetch(base.product, { headers: {'User-Agent': base.userAgents }})
     .then(productPage => productPage.text())
     .then(productBody => console.log(productBody))
  }
  catch(error){
    console.log(error)
  }
}

getProduct()
