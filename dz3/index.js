// class Human {
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//     };

//     #getFullName() {
//         return `${this.name} ${this.surname}`;
//     };

//     get getFullName() {
//         return this.#getFullName;
//     }

// };

// class Worker extends Human {
//     #rate = 100;
//     constructor(name, surname, age, days) {
//         super(name, surname, age);
//         this.days = days;
//     };

//     get rate() {
//         return this.#rate;
//     };

//     #getSalary() {
//         return this.#rate * this.days;
//     };

//     get getSalary() {
//         return this.#getSalary;
//     }

// }

// class Developer extends Human {
//     constructor(name, surname, age, sphere, company) {
//         super(name, surname, age);
//         this.sphere = sphere;
//         this.company = company;
//     };
// }

// class Designer extends Human {
//     constructor(name, surname, age, platform, environment) {
//         super(name, surname, age);
//         this.platform = platform;
//         this.environment = environment;
//     }
// }

// const vasya = new Human('Vasya', 'Pupkin', 45);
// console.log(vasya.getFullName());

// const worker = new Worker('Vasya', 'Pupkin', 45, 15);
// console.log(worker.getSalary());

// const dev = new Developer('Ivan', 'Ivanov', 30, 'FrontendDev', 'ITcomp');
// console.log(dev.getFullName());

// const designer = new Designer('Anton', 'Sidorov', 40, 'Photoshop', 'Web');
// console.log(designer.getFullName());


// class MyPromise {
//     constructor(func) {
//         this.theN = func;
//     }
// };

// const myResolve = word => {
//     console.log('resolve', word);
// };

// const promis = new MyPromise( myResolve => {
//     const str = 'hello';
//     myResolve(str);
// });

// promis.theN(myResolve);
