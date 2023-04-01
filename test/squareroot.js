const assert = require('chai').assert;
const { expect } = require('chai');
const squareRoot = require('../public/js/squareroot')

// Square root tests
describe('SquareRoot', () => {
    it('SquareRoot of positive number', () => {
        expect(squareRoot(16)).to.equal(4)
        expect(squareRoot(16)).to.not.equal(58)
    })
    it('SquareRoot of decimal number', () => {
        expect(squareRoot(12.58)).to.equal(3.547)
        expect(squareRoot(12.58)).to.not.equal(3.54)
    })
    it('SquareRoot of negative number', () => {
        expect(squareRoot(-16)).to.be.NaN
        expect(squareRoot(-16)).to.not.equal(4)
    })
    it('SquareRoot of zero', () => {
        expect(squareRoot(0)).to.equal(0)
        expect(squareRoot(0)).to.not.equal(4)
    })
    it('SquareRoot of NaN', () => {
        expect(squareRoot("64")).to.be.NaN
        expect(squareRoot("64")).to.not.equal(8)
    })
})