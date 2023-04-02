function substractNumbers(a, b) {
    //Check if a is a string and convert it into a int
    if(typeof a === 'string'){
        const intA = parseInt(a);
        //Check if parseInt succeed to convert the string into int
        if(!isNaN(intA)){
            a = intA;
        }
    }
    
    //Check is b is a string and convert it into a int
    if(typeof b === 'string'){
        intB = parseInt(b);
        //Check if parseInt succeed to convert the string into int
        if(!isNaN(intB)){
            b = intB;
        }
    }
    return a-b;
}

module.exports = substractNumbers;