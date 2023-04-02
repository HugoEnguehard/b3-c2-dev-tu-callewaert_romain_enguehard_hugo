function squareRoot(a) {
    if(isNaN(a) || typeof(a) !== 'number') return NaN

    if(a < 0) return NaN

    if (a === 0) return 0

    let x0 = a;
    let x1 = (x0 + a / x0) / 2
    while (Math.abs(x1 - x0) >= 0.0001) {
        x0 = x1
        x1 = (x0 + a / x0) / 2
    }
    return parseFloat(x1.toFixed(3))
}

module.exports = squareRoot;