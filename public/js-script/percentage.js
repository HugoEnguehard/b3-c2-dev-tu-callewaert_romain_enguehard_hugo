function percentage(value, percentage) {
    if(isNaN(value) || isNaN(percentage) || typeof(value) !== 'number' || typeof(percentage) !== 'number') return NaN

    if(percentage === 0) return 0

    let result = (value * percentage) / 100

    // For infinite result
    if(!isFinite(result)) {
        if(result > 0) return Infinity
        else return -Infinity
    }

    // If result is not NaN we check the number of decimals and if superior to 3 then we fix it to 3
    if(isNaN(result)) return NaN;
    else { 
        const decimalCount = (result.toString().split('.')[1] || "").length
        if(decimalCount > 3) result = parseFloat(result.toFixed(3))
    }

    return result
}