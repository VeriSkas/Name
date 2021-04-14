// ЗАДАНИЕ 1

let input = document.getElementById('inputValue');
let changedNum = document.getElementById('changedNumber');

function colonOdd(num) {
    num = num + input.value;
    let numArr = num.split('');
    for(let i = 0; i < numArr.length; i++) {
        if((numArr[i] % 2 == 1) && (numArr[i + 1] % 2 == 1)) {
            numArr.splice((i + 1), 0, ':')
        }
    }
    numArr = numArr.join('');
    changedNum.innerHTML = numArr;
}

// ЗАДАНИЕ 2 и 3

// let arr = [1, 2, 3, 4, 5, 6, 'hello', 'world'];

// function getFirst(array, n) {
//     let arrFirst = array.splice(0, n);
//     console.log(arrFirst);
// }

// getFirst(arr, 4);

// function getLast(array, n) {
//     let arrLast = array.splice(-n);
//     console.log(arrLast);
// }

// getLast(arr, 4);

// ЗАДАНИЕ 4

// let arr1 = [1, 8, 0, false, 'string', 1, 8, 3, false, 'string', 96, 1, 8, false, 7, 'string', 96, null, 55, '', null, 55, '', 96, null, 55, ''];
// let arr2 = [14, 55, 'hello', 55, null, 'string', 55, 8, true, 55, 659, 55, null, 'string', 96, 55, 659, true, 55];

// function doUniqueElem(arrey) {
//     let sortArr = arrey.sort();
//     for(let i = 0; i < sortArr.length; i++) {
//         if (sortArr[i] == sortArr[i + 1]) {
//             let repeatElem = sortArr[i];
//             while (sortArr.indexOf(repeatElem) != -1) {
//                 sortArr.splice((sortArr.indexOf(repeatElem)), 1)
//                 i--;
//             }
//         }
//     }
//     return arrey;
// }

// function concatArrey(arrey1, arrey2) {
//     let arreyOne = doUniqueElem(arrey1);
//     let arreyTwo = doUniqueElem(arrey2);
//     let concatArrey = arreyOne.concat(arreyTwo);
//     console.log(concatArrey);
// }

// concatArrey(arr1, arr2);


// ЗАДАНИЕ 5

// let arrey = [5, 69, '63fghbrft', '55grger', 20];
// let elemSqr = 0;

// function sumOfSquares(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         elemSqr = elemSqr + Math.pow(parseFloat(arr[i]), 2);
//     }
//     console.log(elemSqr);
// }

// sumOfSquares(arrey);


// ЗАДАЧКА В КЛАССЕ (преобразовать в массив с массивами)

// let user = [
//     {
//     name: 'Vasya',
//     age: 21
//     },
//     {
//     name: 'Vanya',
//     age: 18
//     },
//     {
//     name: 'Petya',
//     age: 16
//     },
//     {
//     name: 'Katya',
//     age: 29,
//     },
// ]
// let usersMainArr = [];

// function arrUsers (arr) {

//     for(let i = 0; i < arr.length; i++) {
//         let arrUser = [];
//         for(let key in arr[i]) {
//             arrUser.push(arr[i][key]);
//         }
//         usersMainArr[i] = arrUser;
//     }
//     console.log(usersMainArr);
// }

// arrUsers (user);

// ЗАДАНИЕ 6

// let user = [
//     {
//     name: 'Vasya',
//     age: 21
//     },
//     {
//     name: 'Vanya',
//     age: 18
//     },
//     {
//     name: 'Petya',
//     age: 16
//     },
//     {
//     name: 'Katya',
//     age: 29,
//     },
// ]

// function sortArr(arr) {
//     for(let j = 0; j  < arr.length - 1; j++) {
//         for(let i = 0; i < arr.length - 1; i++) {
//             if(arr[i].age > arr[i + 1].age) {
//                 let tempValue = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = tempValue;
//             }
//         }
//     }
//     console.log(arr);
// }

// sortArr(user);


// ЗАДАНИЕ 7

// let user = [
//     {
//     name: 'Vasya',
//     age: 21
//     },
//     {
//     name: 'Vanya',
//     age: 18
//     },
//     {
//     name: 'Petya',
//     age: 16
//     },
//     {
//     name: 'Katya',
//     age: 29,
//     },
// ]

// function propertyValue(array, key) {
//     let keyValue = [];
//     for(let i = 0; i < array.length; i++) {
//         keyValue.push(array[i][key]);
//     }
//     console.log(keyValue);
// }

// propertyValue(user, "name");
