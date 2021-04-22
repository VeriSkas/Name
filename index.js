// ЗАДАНИЕ 1_________________________________

class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate*this.days;
    }
}

const worker1 = new Worker('Vasya', 'Pypkin', 50, 20);
console.log(worker1);
console.log(worker1.getSalary());

//ЗАДАНИЕ 2________________________________________

// class Worker {
//     #name = 'Vasya';
//     #surname = 'Pypkin';
//     #rate = 50;
//     #days = 20;

//     get name() {
//         return this.#name;
//     }

//     get surname() {
//         return this.#surname;
//     }

//     get rate() {
//         return this.#rate;
//     }

//     get days() {
//         return this.#days;
//     }

//     #getSalary() {
//         return this.#rate * this.#days;
//     }

//     get getSalary() {
//         return this.#getSalary();
//     }

// }

// const worker1 = new Worker();
// console.log(worker1);
// console.log(worker1.getSalary);

//ЗАДАНИЕ 3______________________________________

// class Worker {
//     #name = 'Vasya';
//     #surname = 'Pypkin';
//     #rate = 50;
//     #days = 20;

//     get name() {
//         return this.#name;
//     }

//     get surname() {
//         return this.#surname;
//     }

//     get rate() {
//         return this.#rate;
//     }

//     set rate(value) {
//         value = parseInt(value);
//         if(value > 20) {
//             this.#rate = value;
//         } else {
//             console.log('За копейки никто работать не будет!');
//         }
//     }

//     get days() {
//         return this.#days;
//     }

//     set days(value) {
//         value = parseInt(value);
//         if(value < 0 || value > 20) {
//             console.log('Недопустимое количество рабочих дней');
//         } else {
//             this.#days = value;
//         }
//     }

//     #getSalary() {
//         return this.#rate * this.#days;
//     }

//     get getSalary() {
//         return this.#getSalary();
//     }

// }

// const worker1 = new Worker();
// worker1.rate = 30;
// console.log(worker1.rate);
// worker1.days = -10;
// console.log(worker1.days);
// console.log(worker1.getSalary);

//ЗАДАНИЕ 4________________________________

// class Rectangle {
//     constructor(length, width) {
//         this.length = length;
//         this.width = width;
//     }

//     getSquare() {
//         return this.length * this.width;
//     }
// }

// class Parallelepiped extends Rectangle {
//     constructor(height, length, width) {
//         super(length, width);
//         this.height = height;
//     }

//     getSquare() {
//         return this.length * this.width * this.height;
//     }
// }

// const rect1 = new Rectangle(200, 100);
// console.log(rect1);
// console.log(rect1.getSquare());

// const paral1 = new Parallelepiped(50, 200, 100);
// console.log(paral1);
// console.log(paral1.getSquare());
