//Задание №1

let min = 30;

if (min >= 0 && min < 15) {
    console.log('First quarter of an hour');
} else if (min >= 15 && min < 30) {
    console.log('Second quarter of an hour');
} else if (min >= 30 && min < 45) {
    console.log('Third quarter of an hour');
} else if (min >= 45 && min < 60) {
    console.log('Fourth quarter of an hour');
} else {
    console.log(':( error');
}


//Задание №2
/*
let num = 1;
let result;
*/
/*
if (num === 1) {
    result = 'winter';
} else if (num === 2) {
    result = 'spring';
} else if (num === 3) {
    result = 'summer';
} else if (num === 4) {
    result = 'autumn';
} else {
    console.log('Enter numbers 1, 2, 3 or 4.');
}
console.log(result);
*/
/*
switch (num) {
    case 1:
        result = 'winter';
        break;
    case 2:
        result = 'spring';
        break;
    case 3:
        result = 'summer';
        break;
    case 4:
        result = 'autumn';
        break;
    default:
        console.log('Enter numbers 1, 2, 3 or 4.');
}
console.log(result);
*/

//Задание №3
/*
let sum = 0;
for (let i=0; i < 101; i++) {
    sum = sum + i;
    console.log(`${i}: ${sum} `);
}
*/


//Задание №4
/*
let num1 = Number(prompt('Введите первое число'));
let num2 = Number(prompt('Введите второе число'));
let num3 = Number(prompt('Введите третье число'));

if ((num1>num2) && (num1>num3)) {
    console.log(num1);
} else if ((num3>num1) && (num3>num2)) {
    console.log(num3);
} else {
    console.log(num2);
}

let ostatok1 = num1%2;
let ostatok2 = num2%2;
let ostatok3 = num3%2;

if((ostatok1 === 0) && (ostatok2 === 0) && (ostatok3 ===0)) {
    console.log ('Все четные');
} else if((ostatok1 === 0) || (ostatok2 === 0) || (ostatok3 ===0)) {
    while (ostatok1 === 0) {
        console.log('Первое число четное');
        break;
    }
    while (ostatok2 === 0) {
        console.log('Второе число четное');
        break;
    }
    while (ostatok3 === 0) {
        console.log('Третье число четное');
        break;
    }
} else {
    console.log('Все нечетные')
}
*/


//Задание №5
/*
let x = 4;
let y = 9;
let diagonal = Math.sqrt(x*x + y*y);
let radius = 10;

diagonal < radius ? console.log(`${diagonal} < ${radius} : tochka (${x},${y}) lezhit vnutri okruzhnosti`): console.log(`${diagonal} > ${radius} : tochka (${x},${y})  NE lezhit vnutri okruzhnosti`); 
*/


//Задание №6
/*
let star = '*';
let probel = ' ';
for (let i = 0, j = 7; i < 11, j > 0; i++, j--) {
    console.log(probel.repeat(j) + star.repeat(i*0.9) + star.repeat(i) + probel.repeat(j));
}
*/
