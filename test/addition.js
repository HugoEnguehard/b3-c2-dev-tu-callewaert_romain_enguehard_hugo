const assert = require('chai').assert;
const { expect } = require('chai');
const addition = require('../public/js/addition')

// Additions tests
describe('addition.js', () => {
    it('Adding 2 numbers works', () => {
        const result = calculator.addNumbers(2, 3)
        assert.equal(result, 5)
    })
    it('Adding 1 number and 1 string doesn\'t work', () => {
        
    })
    // it('', () => {
    //     const result = calculator
    //     assert
    // })
})