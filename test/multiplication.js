const assert = require('chai').assert;
const { expect } = require('chai');
const multiplication = require('../public/js/multiplication')

// Multiplication tests
describe('Multiplication', () => {

    // 2 positive numbers
    it('Multiply 2 positives numbers give the right result', () => {
        expect(multiplication(2, 5)).to.equal(10)
    })
    it('Multiply 2 positives numbers doesn\'t give the right result', () => {
        expect(multiplication(4, 5)).to.not.equal(17)
    })

    // should return NaN when one of the parametre is not a number
    it('Multiply return a NaN when the first parametre is NaN', ()=> { 
        expect(multiplication("4", 3)).to.be.NaN
    })
    it('Multiply return a NaN when the second parametre is NaN', ()=> { 
        expect(multiplication(4, "6")).to.be.NaN
    })
    it('Multiply return a NaN when one, or both of the parametres are NaN', ()=> { 
        expect(multiplication("7", "8")).to.be.NaN
    })

    // 1 positive and 1 negative number
    it('Multiply 1 positive and 1 negative number gives a negative number', () => {
        expect(multiplication(-3, 5)).to.be.below(0)
    })
    it('Multiply 1 positive and 1 negative number give a good result', () => {
        expect(multiplication(-3, 4)).to.equal(-12)
    })
    it('Multiply 1 positive and 1 negative number doesn\'t give a good result', () => {
        expect(multiplication(-3, 7)).to.not.equal(-12)
    })

    // 2 negative numbers
    it('Multiply 2 negative numbers give a positive number', () => {
        expect(multiplication(-5, -2)).to.be.above(0)
    })

    // One or both parametres are 0
    it('Multiply returns 0 if the first parametre is zero ', () => {
        expect(multiplication(0, 8)).to.equal(0)
    })
    it('Multiply returns 0 if the second parametre is zero ', () => {
        expect(multiplication(-5, 0)).to.equal(0)
    })
    it('Multiply returns 0 if both parametres are zero ', () => {
        expect(multiplication(0, 0)).to.equal(0)
    })
})