const result = document.getElementById('result');
const resultSqrt = document.getElementById('resultSqrt');
const resultDivisor = document.getElementById('resultDivisor');
const resultPercent = document.getElementById('resultPercent');


function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
    result.innerHTML = document.form.textview.value;
}
function minus() {
    document.form.textview.value = -document.form.textview.value;
    result.innerHTML = document.form.textview.value;
}
function sqrt() {
    let inpValue = document.form.textview.value;
    let inpSqrt = Math.sqrt(document.form.textview.value);
    resultSqrt.innerHTML = `&radic;(${inpValue}) = ${inpSqrt}`;
    document.form.textview.value = Math.sqrt(document.form.textview.value);
}
function divisor() {
    let inpValue = document.form.textview.value;
    let inpDivisor = 1/(document.form.textview.value);
    resultDivisor.innerHTML = `1/(${inpValue}) = ${inpDivisor}`;
    document.form.textview.value = 1/(document.form.textview.value);
}
function clean() {
    document.form.textview.value = "";
}
function back() { // .substring(start [, end]) Возвращает часть строки между start и end.
    let inpBack = document.form.textview.value;
    document.form.textview.value = inpBack.substring(0, inpBack.length-1);
    result.innerHTML = document.form.textview.value;
}
function percent() {
    let inpPercent = document.form.textview.value;
    let stringBeforePercent = Number(inpPercent.substring(0, inpPercent.length - 3));
    let stringPercent = Number(inpPercent.substring(inpPercent.length - 3));
    let i = 2;

    while (isNaN(stringPercent) || isNaN(stringBeforePercent)) {
        stringBeforePercent = Number(inpPercent.substring(0, inpPercent.length - i));
        stringPercent = Number(inpPercent.substring(inpPercent.length - i));
        i++;
    }

    if (stringBeforePercent == 0) {
        document.form.textview.value = eval(stringPercent / 100);
    } else {
        document.form.textview.value = eval(((100 + stringPercent) * stringBeforePercent) / 100);
    }
    resultPercent.innerHTML = `${inpPercent}% = ${document.form.textview.value}`;
}
function equal() {
    let inpValue = document.form.textview.value;
    let inpEqual = eval(document.form.textview.value); // eval выполняет значение в скобках
    result.innerHTML = `${inpValue} = ${inpEqual}`;
    document.form.textview.value = eval(document.form.textview.value);
}
