function calculHandler(firstNumber, secondNumber, operator) {
    // TESTS CALCUL : WILL BE REPLACED BY CALCUL FUNCTION IN NEXT UPDATE
    if(operator == "+") return addition(firstNumber, secondNumber)
    else if(operator == "-") return substractNumbers(firstNumber, secondNumber)
    else if(operator == "x") return multiplication(firstNumber, secondNumber)
    else if(operator == "/") return divideNumbers(firstNumber, secondNumber)
    else if(operator == "√") return squareRoot(firstNumber)
    else if(operator == "²") return squareNumber(firstNumber)
    else if(operator == "^") return powerNumbers(firstNumber, secondNumber)
    else if(operator == "%") return percentage(firstNumber, secondNumber)
    return "WTF DUDE"
}