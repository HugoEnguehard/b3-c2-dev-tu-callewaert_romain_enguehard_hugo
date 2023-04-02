const assert = require('chai').assert;
const { expect } = require('chai');
const addition = require('../public/js/addition')

// Additions tests
describe('Addition', () => {
    // Addition of 2 positive numbers
    it('Adding 2 positive numbers work', ()=>{
        expect(addition(1, 3)).to.equal(4)
        expect(addition(2, 6)).to.not.equal(18)
    })

    // Addition with one or both parametres NaN return NaN
    it('Adding one number with NaN returns NaN', ()=>{
        expect(addition("-2", 2)).to.be.NaN
        expect(addition("2", 2)).to.be.NaN
        expect(addition("0", 2)).to.be.NaN

        expect(addition(3, "-5")).to.be.NaN
        expect(addition(4, "3")).to.be.NaN
        expect(addition(5, "0")).to.be.NaN
    })
    it('Adding two NaN returns NaN', ()=>{
        expect(addition("-2", "2")).to.be.NaN
        expect(addition("2", "2")).to.be.NaN
        expect(addition("0", "2")).to.be.NaN
    })

    // Addition of one positive and one negative number
    it('Adding one positive and one negative number works', () => {
        expect(addition(-5, 7)).to.equal(2)
        expect(addition(3, -7)).to.equal(-4)
    })

    // Addition with a zero
    it('Adding one number to zero works', ()=>{
        expect(addition(3, 0)).to.equal(3)
        expect(addition(0, 5)).to.equal(5)
        expect(addition(0, -4)).to.equal(-4)
        expect(addition(-2, 0)).to.equal(-2)
    })

    // Addition with 2 zero
    it('Adding two zero works', ()=>{
        expect(addition(0, 0)).to.equal(0)
    })

    // Addition of opposite number gives 0
    it('Adding two opposite numbers gives zero', ()=>{
        expect(addition(-2, 2)).to.equal(0)
    })


    
    // it('', () => {
    //     const result = addition
    //     assert
    // })
})