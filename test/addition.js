const assert = require('chai').assert;
const { expect } = require('chai');
const addition = require('../public/js/addition')

// Additions tests
describe('addition.js', () => {
    it('Result is a number', ()=>{
        const result = addition.addNumbers(1, 3)
        assert.equal(typeof(result), 'number')
    })
    it('Adding 2 numbers works', () => {
        const result = addition.addNumbers(2, 3, 'These numbers are equal')
        assert.equal(result, 5)
    })
    it('Adding 5 and 7 don\'t give 3', () => {
        const result = addition.addNumbers(5, 7)
        assert.notEqual(result, 3, 'These numbers are not equal')
    })
    it('Adding numbers in string type works', ()=>{
        const result = addition.addNumbers("5", "9")
        assert.equal(result, 14)
    })
    it('Adding a number to a string works', ()=>{
        const result = addition.addNumbers(1, "9")
        assert.equal(result, 10)
    })
    it('Adding a string to a number works', ()=>{
        const result = addition.addNumbers("12", 8)
        assert.equal(result, 20)
    })
    
    // it('', () => {
    //     const result = addition
    //     assert
    // })
})