import { v4 as uuidv4 } from 'uuid';
import { createUser, renderUsersInfo } from './api/api-handlers';
import './style.scss';

const formInput = document.querySelector('.formInput');
const name = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const age = document.querySelector('#age');
const man = document.querySelector('#man');
const gender = man.checked ? 'man':'woman';
const users = document.querySelector('.users');

formInput.addEventListener('submit', event => {
    event.preventDefault();
    const user = {
        userId: uuidv4(),
        name: name.value,
        lastName: lastName.value,
        email: email.value,
        age: age.value,
        gender,
    };
    createUser(user);
    name.value = '';
    lastName.value = '';
    email.value = '';
    age.value = '';
});

users.onclick = () => {
    renderUsersInfo();
};
