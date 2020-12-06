const defaultResult = 0;
let currentResult = defaultResult;
let logEnteries = [];




// Gets inout from iput field
function getUserInput() {
    return parseInt(userInput.value);
}

// Generate and writes calculation log 
function createAnWriteLog(operator,resultBeforeCalc,calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}
function writeToLog(operationIdentifer, prevResults, OperationNumber, newResult) {
    
    const logEntry = {
        operation: operationIdentifer,
        prevResult: prevResults,
        number: OperationNumber,
        result: newResult
    };
    logEnteries.push(logEntry);
    console.log(logEnteries);
}

function add() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAnWriteLog('+', initialResult,enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAnWriteLog('-', initialResult,enteredNumber);
    writeToLog('Subtract', initialResult, enteredNumber, currentResult);

}

function multiply() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAnWriteLog('*', initialResult,enteredNumber);
    writeToLog('Multiply', initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAnWriteLog('/', initialResult,enteredNumber);
    writeToLog('Divide', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click',divide);
