// ________________1__________________

let evenOrOddNumber = (time) => new Promise ( (resolve, reject) => {
    let num = Math.floor(Math.random() * 10);
    setTimeout(() => {
        num % 2 === 0 ? resolve(num) : reject(num)
    }, time);
})

evenOrOddNumber(2000)
    .then( num => console.log('EVEN', num))
    .catch( num => alert(`ODD  ${num}`))

// _________________2_______________________

// let onePromise = () => new Promise ( resolve => {
//     setTimeout(() => {
//         console.log('onePromise');
//         resolve()
//     }, 5000);
// })

// let twoPromise = () => new Promise ( resolve => {
//     setTimeout(() => {
//         console.log('twoPromise');
//         resolve()
//     }, 2000);
// })

// let threePromise = () => new Promise ( resolve => {
//     setTimeout(() => {
//         console.log('threePromise');
//         resolve()
//     }, 3000);
// })

// let fourPromise = () => new Promise ( resolve => {
//     setTimeout(() => {
//         console.log('fourPromise');
//         resolve()
//     }, 1000);
// })

// onePromise()
//     .then( () => twoPromise())
//     .then( () => threePromise())
//     .then( () => fourPromise())

// ____________________3___________________________

// let arrPromise = [];

// for (let index = 0; index < 4; index++) {
//     arrPromise.push(
//         new Promise ( resolve => {
//             let time = Math.round(Math.random() * 5000);
//             setTimeout(() => {
//                 console.log('promise', index);
//                 resolve();
//             }, time);
//         })
//     )
// }

// Promise.all(arrPromise);
// Promise.race(arrPromise);
