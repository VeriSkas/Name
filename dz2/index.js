// _____________________1____________________

// let string = 'КаЖдЫй ОхОтНиК';

// const changeCase = str => {
//     let arr = str
//         .split('')
//         .map(element => {
//             if (element === element.toUpperCase()) {
//             return element.toLowerCase()
//             } else {
//             return element.toUpperCase()
//             }
//         })
//         .join('')
//         .split('/');
//     return arr;
// };

// console.log(changeCase(string));

// ________________________2______________________

// let myArray = ['hello', 'world', false, 1, 2, '', 'hello', 2, 5, '', false, false, 2];

// const removeDuplicates = arr => {
//     let sortArr = arr.filter( (item, i, array) => array.indexOf(item) === i)
//     return sortArr;
// };

// console.log(removeDuplicates(myArray));

// ______________________3______________________

// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// let arr2 = [0, 1, 2, 3];

// const sumArr = (array1, array2) => {
//     let arrSum;
//     if(array1.length > array2.length) {
//         arrSum = array1.map( (elem, i) => {
//             return elem + array2[i] || elem;
//         })
//     } else {
//         arrSum = array2.map( (elem, i) => {
//             return elem + array1[i] || elem;
//         })
//     }
//     return arrSum;
// };

// console.log(sumArr(arr1, arr2));

// _______________________4___________________

// let myArray = ['hello', 'world', false, 1, 2, '', 'hello', 2, 5, '', false, false, 2];

// const countIdentic = arr => {
//     let countItem = arr.reduce((acc, el) => {
//         return {...acc, [el]: (acc[el] + 1) || 1};
//     }, {});
//     let countRepeatItem = Object.values(countItem).filter( i => i > 1).length;
//     return countRepeatItem;
// };

// console.log(countIdentic(myArray));

// ____________________________5______________________

// let myArray = ['hello', 'world', false, 1, 2, '', 'hello', 2, 5, '', false, false, 2];

// первый способ

// const countIdentic = arr => {
//     let countItem = arr.reduce((acc, el) => {
//         return {...acc, [el]: (acc[el] + 1) || 1};
//     }, {});
//     let uniqItem = Object.keys(countItem).filter( key  => countItem[key] === 1);
//     return uniqItem;
// };

// console.log(countIdentic(myArray));

//второй способ

// const doUniqueElem = arrey => {
//     let sortArr = arrey.sort();
//     for(let i = 0; i < sortArr.length; i++) {
//         if (sortArr[i] === sortArr[i + 1]) {
//             let repeatElem = sortArr[i];
//             while (sortArr.indexOf(repeatElem) != -1) {
//                 sortArr.splice((sortArr.indexOf(repeatElem)), 1)
//                 i--;
//             }
//         }
//     }
//     return sortArr;
// };

// console.log(doUniqueElem(myArray));
