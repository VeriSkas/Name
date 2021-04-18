// ЗАДАНИЕ 1__________________________________________

// let array = [1, 2, 3, 4, 9, 8, 7, 6, 5];

// function compareNumbers(arr) {
//     return arr.sort( (a, b) => b - a);
// }

// console.log(compareNumbers(array));

//ЗАДАНИЕ 2_____________________________________________

// let array = [1, 2, null, 3, false, 4, 5, 6, undefined, '', NaN, 7, 0, 8, 9, 'десять'];

// function filterFalse(arr) {
//     return arr.filter( item =>
//         item != false && item != undefined && !Number.isNaN(item)
//     );
// }

// console.log(filterFalse(array));

//ЗАДАНИЕ 3_____________________________________________

// let user1 = {
//     firstName: 'Vasya',
//     lastName: 'Petrova',
//     age: 22
// }
// let user2 = {
//     firstName: 'Gena',
//     lastName: 'Sidorov',
//     age: 28
// }
// let user3 = {
//     firstName: 'Lena',
//     lastName: 'Ivanova',
//     age: 44
// }
// let user4 = {
//     firstName: 'Katya',
//     lastName: 'Pupkina',
//     age: 20
// }
// let users = [user1, user2, user3, user4];

// function propertyValue(array, key) {
//     return array.map( item => item[key]);
// }

// console.log(propertyValue(users, "lastName"));

//ЗАДАНИЕ 4_______________________________________

// let arrStr = ['Это', 'есть', 'массив', 'строк'];
// let arrLength = arrStr.map( item => item.length);
// console.log(arrLength);

//ЗАДАНИЕ 5_________________________________________

// let numbers = [2, 3, 5, 7, 11, 13, 17, 19];
// let tempValue = 0;

// function currentSums(arr) {
//     let summ = arr.reduce( (temp, item) => {
//         tempValue = tempValue + item;
//         return [...temp, tempValue];
//     }, [])
//     console.log(summ);
// }

// currentSums(numbers);

//ЗАДАНИЕ 6_____________________________________

// let arrStr = ['Это', 'есть', 'массив', 'строк'];
// let arrLength = arrStr.reduce( (temp, item) => {
//     return [...temp, item.length]
// }, []);
// console.log(arrLength);

//ЗАДАНИЕ 7________________________________________

let inputValue = document.getElementById('inputValue');
let outputValue = document.getElementById('outputValue');
let btnOk = document.getElementById('btnOk');
let btnOut = document.getElementById('btnOut');
let arr = [];

btnOk.onclick = function() {
    arr.push(inputValue.value);
    inputValue.value = '';
    console.log(arr);
}

function sortNumber(arrey) {
    return arrey.sort( (a, b) => a - b);
}

btnOut.onclick = function() {
    arr = sortNumber(arr);
    outputValue.innerHTML = arr.join('; ');
    arr = [];
}

