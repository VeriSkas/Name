// _______________1_________________

// let arr = [1, 2, 3, 4, 5,];
// arr.splice(1, 2);
// console.log(arr);

// _______________2_________________

// let str = 'My favorite "Hello world"';
// let arr = str.split('').reverse();
// let reverseStr = arr.join('');
// console.log(reverseStr);

// ______________3__________________

// let str = 'My favorite "Hello world"';
// let arr = str.split('');
// let reverseArr = [];

// for (i = arr.length - 1; i >= 0; i--) {
//     reverseArr.push(arr[i]);
// }

// let reverseStr = reverseArr.join('');
// console.log(reverseStr);

// ______________4____________________

// let arr = ['Hello', 4, 99, 0, false, 'world', null];
// let arr1 = ['Hello', 4, 99, 0, false, 'world', null];
// let arr2 = ['Hello', 4, 100, 0, true, 'world', null, ''];

// function compareArr (a, b) {
//     if (a.length === b.length) {
//         for (i = 0; i < a.length; i++){
//             if  (a[i] !== b[i]) {
//                 console.log('false');
//                 return false;
//             }
//         }
//         console.log('true');
//         return true;
//     } else {
//         console.log('false');
//         return false;
//     }
// }

// compareArr(arr, arr1);
// compareArr(arr, arr2);

// _________________5___________________

// for (i = 1; i <= 100; i++) {
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

// _________________6____________________

// let arr = [];
// let arr1 = [];
// let lengthArr = 8;

// for (i = 0; i < lengthArr; i++) {
//     if (i % 2 === 0) {
//         arr[i] = '#';
//         arr1[i] = ' ';
//     } else {
//         arr[i] = ' ';
//         arr1[i] = '#';
//     }
// }

// for (i = 0; i < lengthArr; i++) {
//     (i % 2 === 0) ? console.log(arr.join('')): console.log(arr1.join(''));
// }

// _________________7_________________

let input = document.getElementById('input');
let list = document.getElementById('list');

function inputList() {
    let newListItem = document.createElement('li');
    newListItem.textContent = input.value;
    list.appendChild(newListItem);
}

function deleteList() {
    let itemLi = document.querySelector('ul#list > li:last-child');
    (itemLi === null) ? alert('Список удален') : itemLi.remove();
}

//Выводит пустой объект почему-то :(
localStorage.setItem('list', JSON.stringify(list));
JSON.parse(localStorage.getItem('list'));
console.log(JSON.parse(localStorage.getItem('list')));
