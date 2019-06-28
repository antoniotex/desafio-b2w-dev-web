const getProduct = require('../lib')

const url = 'https://www.americanas.com.br/produto/133718358/'

const mock = { 
  id: 133718358,
  breadcrumb: [ 'página inicial', 'tv e home theater', 'tv', 'tv 4k' ],
  name:
   'Smart TV LED 50" LG 50UK6510 Ultra HD 4k com Conversor Digital 4 HDMI 2 USB Wi-Fi ThinQ AI WebOS 4.0 60Hz  Inteligencia Artificial  - Prata',
  img:
   'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133718/3/133718358_1GG.png',
  seller: 'americanas.com',
  price: 2199 
}

describe('getProduct function', () => {
  let page = ''
  test('function getProduct should return a string', async () => {
    const data = await getProduct.getProduct(url)
    page = data
    expect(typeof data).toBe('string')
  })

  test('function _scraping should return object', () => {
    expect(getProduct._scraping(page)).toEqual(mock)
  })
})