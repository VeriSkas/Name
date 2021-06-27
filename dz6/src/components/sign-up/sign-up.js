import { signUp } from '../../api/api-handlers';

export const signUpHandler = () => {
    const signUpForm = document.querySelector('.signUp_form');
    signUpForm.addEventListener('submit', event => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const email = document.getElementById('email').value;
        const password1 = document.getElementById('password1').value;
        const man = document.getElementById('man');
        const gender = man.checked ? 'man' : 'woman';
        const birth = document.getElementById('birth').value;

        signUp(name, surname, birth, gender, email, password1);
    });
};
