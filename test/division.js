const assert = require('chai').assert;
const { expect } = require('chai');
const divideNumbers = require('../public/js/division')

// Additions tests
describe('Division', () => {
    // it('', () => {
    //     const result = calculator
    //     assert
    // })
    it('Dividing two numbers works', () => {
        const result = divideNumbers(4, 2)
        assert.equal(result, 2)
    })
    it('Dividing two numbers doesn\'t work', () => {
        const result = divideNumbers(12, 2)
        assert.notEqual(result, 4)
    })
    it('Check if result is a number', () => {
        const result = divideNumbers(10, 2)
        assert.isNumber(result)
    })
    it('Dividing with string works', () => {
        const result = divideNumbers('20', 4)
        assert.equal(result, 5)
    })
    it('Dividing with a negative number works', () => {
        const result = divideNumbers(10, -2)
        assert.equal(result, -5)
    })
    it('Dividing with a negative string works', () => {
        const result = divideNumbers('-10', 5)
        assert.equal(result, -2)
    })
    it('Dividing with 0', () => {
        const result = divideNumbers(5, 0)
        assert.equal(result, 'Not divisible by 0')
    })
    it('Dividing by himself return 1', () => {
        const result = divideNumbers(6, 6)
        assert.equal(result, 1)
    })
})