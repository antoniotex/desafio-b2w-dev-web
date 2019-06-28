const getProduct = require('../lib')

const url = 'https://www.americanas.com.br/produto/133718358/'

describe('getProduct function', () => {
  test('function getProduct should return a string', async () => {
    const data = await getProduct(url)
    expect(typeof data).toBe('string')
  })
})