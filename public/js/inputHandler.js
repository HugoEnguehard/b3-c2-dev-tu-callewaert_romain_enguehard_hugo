const authorizedKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "x", "/", "%", "²", "√", "=", "←", "CE"]  
let firstNumber = ""
let secondNumber = ""
let operator = ""
let result = ""

function input(userInput) {  
    // Is the key authorized
    if(!authorizedKeys.includes(userInput)) {
        errorHandler(new Error("Unauthorized key"))
        return
    }

    // The userInput is a number
    if(authorizedKeys.slice(0, 10).includes(userInput)) {
        // Is the key a zero and the first number still empty ?
        if(operator != ""){
            if(!(secondNumber == "" && userInput == 0)) {
                secondNumber += userInput
            } else secondNumber = 0
        }else {
            if(!(firstNumber == "" && userInput == 0)) {
                firstNumber += userInput
            } else firstNumber = 0
        }
    } 
    else if(userInput === "CE"){
        resetCalculatrice()
    }
    // User wants to remove a character
    else if(userInput === "←") {
        if(firstNumber !== "" && secondNumber === "" && operator == "") firstNumber = firstNumber.slice(0, -1)
        else if(firstNumber !== "" && secondNumber !== "" && operator !== "") secondNumber = secondNumber.slice(0, -1)
    }
    // The userInput is an operator
    else {
        if(firstNumber === "") firstNumber = "0"
        // Result asked
        if(userInput == "=") {
            if(secondNumber === "") secondNumber = "0"
            // If enter is pressed without any operation
            if(operator === "") operator = "+"
            result = calculHandler(parseInt(firstNumber), parseInt(secondNumber), operator)
        }
        // Operator after second number already started 
        else if(secondNumber !== "" && operator !== "") {
            // Don't do anything (normal !)
        }
        // Negative number
        else if(userInput === "-" && operator !== "") {
            if(secondNumber == "") secondNumber += userInput
        } 
        // Operators which works without a second number
        else if(userInput === "√" || userInput === "²") {
            result = calculHandler(parseInt(firstNumber), parseInt(secondNumber), userInput)
        }
        // Classic operation
        else operator = userInput
    }

    // We update the interface
    updateDisplay(firstNumber, operator, secondNumber, result)

    // If the result is non "" then the calcul is over so we reset the calculatrice
    if(result !== "") resetCalculatrice()

    // console.log(userInput, firstNumber, operator, secondNumber, result)
}

function updateDisplay(firstNumber, operator, secondNumber, result) {
    let spanFirstNumber = document.getElementById("firstNumber")
    let spawnOperator = document.getElementById("operator")
    let spanSecondNumber = document.getElementById("secondNumber")
    let spanResult = document.getElementById("result")

    if(firstNumber == "") spanFirstNumber.innerHTML = "0"
    else spanFirstNumber.innerHTML = firstNumber

    spawnOperator.innerHTML = operator

    if(secondNumber == "") spanSecondNumber.innerHTML = "0"
    else spanSecondNumber.innerHTML = secondNumber

    if(result !== "") spanResult.innerHTML = result
    else spanResult.innerHTML = ""
}

function resetCalculatrice() {
    firstNumber = ""
    secondNumber = ""
    operator = ""
    result = ""
}