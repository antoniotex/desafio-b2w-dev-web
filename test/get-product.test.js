const getProduct = require('../lib')

const urlMock = 'https://www.americanas.com.br/produto/133718358/'

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

describe('Directory lib functions --->>', () => {
  let pageProduct = ''
  test('function getProduct should return a string', async () => {
    const data = await getProduct.getProduct(urlMock)
    pageProduct = data
    expect(typeof data).toBe('string')
  })

  test('_scraping should be a function / return an object / to equal mock', () => {
    expect(typeof getProduct._scraping).toEqual('function')
    expect(typeof getProduct._scraping(pageProduct)).toEqual('object')
    expect(getProduct._scraping(pageProduct)).toEqual(mock)
  })

  test('_getProductId should be a function / return a number / to equal mock.id', () => {
    expect(typeof getProduct._getProductId).toEqual('function')
    expect(typeof getProduct._getProductId()).toBe('number')
    expect(getProduct._getProductId()).toEqual(mock.id)
  })

  test('_getBreadcrumbs should be a function / return an array / to equal mock.breadcrumb', () => {
    expect(typeof getProduct._getBreadcrumbs).toEqual('function')
    expect(typeof getProduct._getBreadcrumbs()).toEqual('object')
    expect(getProduct._getBreadcrumbs()).toEqual(mock.breadcrumb)
  })

  test('_getProductName should be a function / return a string / to equal mock.name', () => {
    expect(typeof getProduct._getProductName).toEqual('function')
    expect(typeof getProduct._getProductName()).toBe('string')
    expect(getProduct._getProductName()).toEqual(mock.name)
  })

  test('_getProductImage should be a function / return a string / to equal mock.img', () => {
    expect(typeof getProduct._getProductImage).toEqual('function')
    expect(typeof getProduct._getProductImage()).toBe('string')
    expect(getProduct._getProductImage()).toEqual(mock.img)
  })

  test('_getProductSeller should be a function / return a string / to equal mock.seller', () => {
    expect(typeof getProduct._getProductSeller).toEqual('function')
    expect(typeof getProduct._getProductSeller()).toBe('string')
    expect(getProduct._getProductSeller()).toEqual(mock.seller)
  })

  test('_getProductPrice should be a function / return a number / to equal mock.price', () => {
    expect(typeof getProduct._getProductPrice).toEqual('function')
    expect(typeof getProduct._getProductPrice()).toBe('number')
    expect(getProduct._getProductPrice()).toEqual(mock.price)
  })
})