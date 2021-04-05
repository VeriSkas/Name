const inpValue = document.getElementById("inpValue");
let result = 0;           // результат предыдущего выражения
let changedNumber = '';   //последняя введенная цифра
let operator = '';

function inputNumber(num) {
    changedNumber = changedNumber + num;
    inpValue.value = changedNumber;
}

function plus() {
    if (changedNumber) {
        operator = '+';
        result += Number(changedNumber);
        changedNumber = '';
    }
}

function minus() {
    operator = '-';
    if (result === 0) {
        result = Number(changedNumber);
    } else {
        result -= Number(changedNumber);
    }
    changedNumber = '';
}

function multiply() {
    operator = '*';
    if (result === 0) {
        result = Number(changedNumber);
    } else {
        result *= Number(changedNumber);
    }
    changedNumber = '';
}

function divide() {
    operator = '/';
    if (result === 0) {
        result = Number(changedNumber);
    } else {
        result /= Number(changedNumber);
    }
    changedNumber = '';
}

function percent() {
    if (result === 0) {
        changedNumber = Number(changedNumber)/ 100;
    } else {
        changedNumber = result * Number(changedNumber) / 100;
    }
}

function sqrt() {
    changedNumber = Math.sqrt(changedNumber);
    inpValue.value = changedNumber;
}

function clean() {
    inpValue.value = '';
    result = 0;
    changedNumber = '';
    operator = '';
}

function back() {
    changedNumber = changedNumber.substr(0, changedNumber.length-1);
    inpValue.value = changedNumber;
}

function minusPlus() {
    changedNumber = -changedNumber;
    inpValue.value = changedNumber;
}

function equal() {
    if (operator == '+') {
        result += Number(changedNumber);
        changedNumber = result;
    } else if (operator === '-') {
        result -= Number(changedNumber);
        changedNumber = result;
    } else if (operator === '*') {
        result *= Number(changedNumber);
        changedNumber = result;
    } else if (operator === '/') {
        result /= Number(changedNumber);
        changedNumber = result;
    }
    result = 0;
    operator = '';
    inpValue.value = changedNumber;
}

