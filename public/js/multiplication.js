function multiplication(a, b) {
    console.log(a, b)
    if(isNaN(a) || isNaN(b) || typeof(a) !== 'number' || typeof(b) !== 'number') return NaN;
    return a*b;
}

module.exports = multiplication;