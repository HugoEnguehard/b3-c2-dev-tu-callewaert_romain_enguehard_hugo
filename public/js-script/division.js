function divideNumbers(a, b){
    //Check if b is eual to 0, because we can't divide by 0
    if(b == 0) return "Not divisible by 0";

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
    return a/b;
}