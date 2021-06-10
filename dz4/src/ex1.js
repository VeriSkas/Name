const user = {
    // firstName: 'Petya',
    lastName: 'Ivanov',
    age: 25,
    job: {
        // company: 'iTechArt',
        position: 'webDev',
        skills: ['JS', 'HTML', 'CSS']
    }
};

const {
    firstName: name = 'noname',
    lastName,
    age,
    job: { company: myCompany = 'epam' }
} = user;

console.log(name);
console.log(myCompany);
