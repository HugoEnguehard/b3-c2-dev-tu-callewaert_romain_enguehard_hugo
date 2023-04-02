function calculHandler(firstNumber, secondNumber, operator) {
    // TESTS CALCUL : WILL BE REPLACED BY CALCUL FUNCTION IN NEXT UPDATE
    if(operator == "+") return firstNumber+secondNumber
    if(operator == "-") return firstNumber-secondNumber
    if(operator == "x") return firstNumber*secondNumber
    if(operator == "√") return "RACINE DE " + firstNumber
    if(operator == "²") return firstNumber * firstNumber
    return "RESULT"
}