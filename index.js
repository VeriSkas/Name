// const div1 = document.createElement('div');
// div1.innerHTML = 'Div1';
// div1.setAttribute('clicked', false);
// console.log( typeof div1.getAttribute('clicked')); //получить атрибут
// document.body.append(div1); // append - в конец body добавляет div1    prepand - в начало

// const div2 = document.createElement('div');
// div2.innerHTML = 'Div2';
// div1.after(div2); // append - див в диве; before - перед, after - после

// setTimeout(() => div2.remove(), 2000); 
// setTimeout(() => div2.className = 'redBlock', 2000); 
// ____________________________________________________________________

// const p = document.createElement('p');
// document.body.append(p);
// p.className = 'redBlock';

// let num = 0;
// let int;

// p.innerHTML = 'Please wait...';

// setTimeout(() => {
    
//     int = setInterval(() => {
//         p.innerHTML = num;
//         num++
//     }, 1000);

// }, 2000);

// setTimeout(() => {
//     clearInterval(int);
// }, 100000);

// ________________________________________________________


// const p = document.createElement('p');

// document.body.append(p);
// let hour = 0;
// let min = 0;
// let sec = 0;
// let int;

// int = setInterval(() => {
//     p.innerHTML = `${hour} : ${min} : ${sec}`;
//     sec++
//     if(sec === 60) {
//         sec = 0;
//         min++;
//     }

//     if(min === 60) {
//         sec = 0;
//         min = 0;
//         hour++
//     }

//     if(hour === 24) {
//         sec = 0;
//         min = 0;
//         hour = 0;
//     }
// }, 10);
// ________________________________________________________

// const p = document.createElement('p');

// document.body.append(p);
// let hour1 = 2;
// let hour2 = 3;
// let min1 = 5;
// let min2 = 9;
// let sec1 = 0;
// let sec2 = 0;

// setInterval(() => {
//     p.innerHTML = `${hour1}${hour2} : ${min1}${min2} : ${sec1}${sec2}`;
//     sec2++
//     if(sec2 === 10) {
//         sec2 = 0;
//         sec1++;
//     }
//     if(sec1 === 6) {
//         sec1 = 0;
//         sec2 = 0;
//         min2++;
//     }
//     if(min2 === 10) {
//         min2 = 0;
//         min1++;
//     }
//     if(min1 === 6) {
//         min1 = 0;
//         min2 = 0;
//         hour2++;
//     }
//     if(hour2 === 10) {
//         hour2 = 0;
//         hour1++;
//     } 
//     if(hour1 === 2 && hour2 === 4) {
//         hour2 = 0;
//         hour1 = 0;
//     }
    
// }, 100);

// console.log(`${hour1}${hour2} : ${min1}${min2} : ${sec1}${sec2}`);
// ________________________________________________
// let secs = 0;
// let mins = 0;
// let hours = 0;
// let formatedSecs = '00';
// let formatedMins = '00';
// let formatedHours = '00';

// const p = document.createElement('p');
// document.body.append(p);

// setInterval(() => {
//     if (secs === 60) {
//         secs = 0;
//         mins++;
//         mins < 10 ? formatedMins = `0${mins}` : formatedMins = mins;
//     }

//     if (mins === 60) {
//         mins = 0;
//         hours++;
//         hours < 10 ? formatedHours = `0${hours}` : formatedHours = hours;
//     }

//     secs < 10 ? (formatedSecs = `0${secs}`) : (formatedSecs = secs);
//     secs++;
//     p.innerHTML = `${formatedHours} : ${formatedMins} : ${formatedSecs}`
// }, 1);

// ________________________________________

// const div = document.createElement('div');
// document.body.prepend(div);
// div.innerHTML = 'DIV';
// let counter = 0;

// div.onclick = function() {
//     if(counter % 2 === 0 ) {
//         div.className = 'redBlock';
//         console.log('red');
//     } else {
//         div.classList.remove('redBlock');   // удалить класс
//         div.className = 'violetBlock';
//     }
//     counter++;
    
// }

// setInterval(() => {
//     if(counter % 2 === 0 ) {
//         div.className = 'redBlock';
//         console.log('red');
//     } else {
//         div.classList.remove('redBlock');   // удалить класс
//         div.className = 'violetBlock';
//     }
//     counter++;
// }, 1000);

// for (let i = 0; i < 10; i++) {
//     const div = document.createElement('div');
//     div.innerHTML = `DIV-${i}`;
//     document.body.append(div);
//     div.onclick = function () {
//         // let isClicked = div.getAttribute('clicked');
//         // if(!isClicked) {
//         //     div.setAttribute('clicked', true);
//         //     div.className = 'redBlock';
//         // } else {
//         //     div.removeAttribute('clicked');
//         //     div.classList.remove('redBlock');
//         // }


//         div.remove();
//     }
// }

// _________________________________________________

let input = document.createElement('input');
document.body.append(input);
let buttonOk = document.createElement('button');
buttonOk.innerHTML = 'OK'
document.body.append(buttonOk);
let ul = document.createElement('ul');
document.body.append(ul);
let buttonSave = document.createElement('button');
buttonSave.innerHTML = 'Сохранить список';
document.body.append(buttonSave);
let buttonOpenSave = document.createElement('button');
buttonOpenSave.innerHTML = 'Открыть список';
document.body.append(buttonOpenSave);
let arr = [];

buttonOk.onclick = function() {
    const li = document.createElement('li');
    li.innerHTML = input.value;
    arr.push(input.value);
    console.log(arr);
    ul.append(li);
    li.onclick = function () {
        let isClicked = li.getAttribute('clicked');
        if(!isClicked) {
            li.setAttribute('clicked', true);
            li.style.textDecoration = 'line-through';
        } else {
            li.removeAttribute('clicked');
            li.style.textDecoration = 'none';
        }
    }
    const button = document.createElement('button');
    button.innerHTML = 'delete';
    li.append(button);
    button.onclick = function () {
        li.remove();
        button.remove();
    }
    input.value = "";
}

buttonSave.onclick = function() {
    localStorage.setItem('list', JSON.stringify(arr));
}

buttonOpenSave.onclick = function() {
    for (let i= 0; i < JSON.parse(localStorage.getItem('list')).length; i++) {
        let saveLi = document.createElement('li');
        saveLi.innerHTML = JSON.parse(localStorage.getItem('list'))[i];
        ul.append(saveLi);
    }
}

// for (let i = 0; i < 10; i++) {
//     const li = document.createElement('li');
//     li.innerHTML = `LI-${i}`;
//     ul.append(li);
//     li.onclick = function () {
//         let isClicked = li.getAttribute('clicked');
//         if(!isClicked) {
//             li.setAttribute('clicked', true);
//             li.style.textDecoration = 'line-through';
//         } else {
//             li.removeAttribute('clicked');
//             li.style.textDecoration = 'none';
//         }
//     }
//     const button = document.createElement('button');
//     button.innerHTML = 'delete';
//     li.append(button);
//     button.onclick = function () {
//         li.remove();
//         button.remove();
//     }
// }