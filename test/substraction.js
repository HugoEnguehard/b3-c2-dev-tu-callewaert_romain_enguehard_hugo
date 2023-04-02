const assert = require('chai').assert;
const { expect } = require('chai');
const substraction = require('../public/js/substraction')

// Substractions tests
describe('substraction.js', () => {
    // it('', () => {
    //     const result = calculator
    //     assert
    // })
    it('Substract two numbers works', () => {
        const result = substraction(5, 2)
        assert.equal(result, 3)
    })
    it('Substract two numbers doesn\'t work', () => {
        const result = substraction(12, 2)
        assert.notEqual(result, 2)
    })
    it('The result is a number', () => {
        const result = substraction(15, 2)
        assert.isNumber(result)
    })
    it('Substract with a string works', () => {
        const result = substraction('10', 5)
        assert.equal(result, 5)
    })
    it('Substract with a string works', () => {
        const result = substraction('10', '3')
        assert.equal(result, 7)
    })
    it('Substract with a negative number works', () => {
        const result = substraction(10, -3)
        assert.equal(result, 13)
    })
    it('Substract with a negative string works', () => {
        const result = substraction('-12', 5)
        assert.equal(result, -17)
    })
    it('Substract 2 great numbers works', () => {
        const result = substraction(150954, 14768)
        assert.equal(result, 136186)
    })
})