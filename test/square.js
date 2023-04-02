const assert = require('chai').assert;
const { expect } = require('chai');
const square = require('../public/js/square')

// Additions tests
describe('calculator.js', () => {
    // it('', () => {
    //     const result = calculator
    //     assert
    // })
    it('Square a positive number works', () => {
        const result = square.squareNumber(10)
        assert.equal(result, 100)
    })
    it('Square a negative number works', () => {
        const result = square.squareNumber(-2)
        assert.equal(result, -4)
    })
    it('Square a string works', () => {
        const result = square.squareNumber('5')
        assert.equal(result, 25)
    })
    it('Square a number doesn\'t work', () => {
        const result = square.squareNumber(4)
        assert.notEqual(result, 12)
    })
    it('Check if the result is a number', () => {
        const result = square.squareNumber(3)
        assert.isNumber(result)
    })
})