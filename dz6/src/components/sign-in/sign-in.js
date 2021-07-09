import { signIn } from '../../api/api-handlers';

export const signInHandler = () => {
    const signInForm = document.querySelector('.signIn_form');
    signInForm.addEventListener('submit', event => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        signIn(email, password);
    });
};
