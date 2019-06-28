const helpers = require('../helpers')

describe('Helpers directory functions --->>', () => {
  test('regexOnlyNumbers should be a function / return a number / convert string to number', () => {
    expect(typeof helpers.regexOnlyNumbers).toEqual('function')
    expect(typeof helpers.regexOnlyNumbers('(Cód.133718358)')).toBe('number')
    expect(helpers.regexOnlyNumbers('(Cód.133718358)')).toEqual(133718358)
  })
  
  test('convertStringToFloat should be a function / return a number / convert string to float number', () => {
    expect(typeof helpers.convertStringToFloat).toEqual('function')
    expect(typeof helpers.convertStringToFloat('2000.09')).toBe('number')
    expect(helpers.convertStringToFloat('2000.09')).toEqual(2000.09)
  })
})