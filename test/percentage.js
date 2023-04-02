const assert = require('chai').assert;
const { expect } = require('chai');
const percentage = require('../public/js/percentage')

// Additions tests
describe('Percentage', () => {

    // Percentage with positive numbers only
    it('Percentage with 2 positive numbers', () => {
        expect(percentage(50, 10)).to.equal(5)
        expect(percentage(50, 150)).to.equal(75)
    })

    // Percentage with negative numbers
    it('Percentage with a negative percentage', () => {
        expect(percentage(100, -20)).to.equal(-20)
        expect(percentage(100, -10)).to.not.equal(-20)
    })
    it('Percentage with a negative value', () => {
        expect(percentage(-100, 20)).to.equal(-20)
        expect(percentage(-100, 10)).to.not.equal(40)
    })

    // Percentage with negative numbers only
    it('Percentage with negative value and percentage', () => {
        expect(percentage(-100, -20)).to.equal(20)
        expect(percentage(-100, -10)).to.not.equal(32)
    })

    // Percentage with decimal result
    it('Percentage with decimal result', () => {
        expect(percentage(132, 42)).to.equal(55.44)
        expect(percentage(128, 12)).to.equal(15.360)
        expect(percentage(128, 12)).to.not.equal(42.69)
    })

    // Percentage with 0 values
    it('Percentage with value equal to 0', () => {
        expect(percentage(0, 42)).to.equal(0)
        expect(percentage(0, -12)).to.equal(0)
        expect(percentage(0, -12)).to.not.equal(12)
    })
    it('Percentage with percentage equal to 0', () => {
        expect(percentage(50, 0)).to.equal(0)
        expect(percentage(-30, 0)).to.equal(0)
        expect(percentage(-20, 0)).to.not.equal(20)
    })
    it('Percentage with value and percentage equal to 0', () => {
        expect(percentage(0, 0)).to.equal(0)
        expect(percentage(0, 0)).to.not.equal(20)
    })

    // Percentage with NaN values
    it('Percentage with value equals to NaN', () => {
        expect(percentage("45", 10)).to.be.NaN
        expect(percentage("45", 10)).to.not.equal(4.5)
        expect(percentage("45", -10)).to.be.NaN
        expect(percentage("45", -10)).to.not.equal(-4.5)
    })
    it('Percentage with percentage equals to NaN', () => {
        expect(percentage(100, "20")).to.be.NaN
        expect(percentage(100, "20")).to.not.equal(20)
        expect(percentage(100, "-40")).to.be.NaN
        expect(percentage(100, "-40")).to.not.equal(-40)
    })
    it('Percentage with value and percentage equal to NaN', () => {
        expect(percentage("100", "20")).to.be.NaN
        expect(percentage("100", "20")).to.not.equal(20)
        expect(percentage("100", "-40")).to.be.NaN
        expect(percentage("100", "-40")).to.not.equal(-40)
        expect(percentage("-100", "40")).to.be.NaN
        expect(percentage("-100", "40")).to.not.equal(40)
        expect(percentage("-100", "-40")).to.be.NaN
        expect(percentage("-100", "-40")).to.not.equal(40)
    })

    // Percentage with infinite values
    it('Percentage with value equals to Infinity', () => {
        expect(percentage(Infinity, 20)).to.equal(Infinity)
        expect(percentage(Infinity, -20)).to.equal(-Infinity)
    })
    it('Percentage with percentage equals to Infinity', () => {
        expect(percentage(50, Infinity)).to.equal(Infinity)
        expect(percentage(50, -Infinity)).to.equal(-Infinity)
    })
    it('Percentage with value and percentage equals to Infinity', () => {
        expect(percentage(Infinity, Infinity)).to.equal(Infinity)
        expect(percentage(Infinity, -Infinity)).to.equal(-Infinity)
        expect(percentage(-Infinity, Infinity)).to.equal(-Infinity)
        expect(percentage(-Infinity, -Infinity)).to.equal(Infinity)
        expect(percentage(-Infinity, -Infinity)).to.not.equal(-Infinity)
        expect(percentage(-Infinity, Infinity)).to.not.equal(Infinity)
    })

})