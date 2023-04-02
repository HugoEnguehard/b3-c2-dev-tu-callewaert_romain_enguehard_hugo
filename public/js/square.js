function squareNumber(value) {
    //Check if a is a string and convert it into a int
    if(typeof value === 'string'){
        const intValue = parseInt(value);
        //Check if parseInt succeed to convert the string into int
        if(!isNaN(intValue)){
            value = intValue;
        }
    }

    return value^2;
}

module.exports = squareNumber