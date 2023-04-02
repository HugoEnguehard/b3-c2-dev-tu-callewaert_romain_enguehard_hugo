const assert = require('chai').assert;
const { expect } = require('chai');
const power = require('../public/js/power')

// Additions tests
describe('power.js', () => {
    // it('', () => {
    //     const result = calculator
    //     assert
    // })
    it('Power with a positive number works', () => {
        const result = power(6, 3)
        assert.equal(result, 216)
    })
    it('Power with a zero is equal to 1', () => {
        const result = power(250, 0)
        assert.equal(result, 1)
    })
    it('Power with a number doesn\'t work', () => {
        const result = power(2, 2)
        assert.notEqual(result, 12)
    })
    it('Power with 1 is equal to itself', () => {
        const result = power(10, 1)
        assert.equal(result, 10)
    })
    it('Check if the result is a number', () => {
        const result = power(4, 5)
        assert.isNumber(result)
    })
    it('Works even if the number is string', () => {
        const result = power('3', 2)
        assert.isNumber(result)
    })
})