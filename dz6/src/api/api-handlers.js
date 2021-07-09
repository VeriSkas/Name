require('firebase/auth');
import firebase from 'firebase/app';
import axios from 'axios';

import { firebaseConfig, authURL, databaseURL } from './api.config';
import { setToken, setUserEmail } from '../shared/ls-service';
import { routes } from '../shared/constants/routes';

export const initApi = async () => {
    firebase.initializeApp(firebaseConfig);
};

initApi();

export const signIn = (email, password) => {
    return axios.post(authURL, {
        email,
        password,
        returnSequreToken: true
    })
    .then(response => response)
    .then(result => {
        if(result) {
            const { idToken: token } = result.data;
            setToken(token);
            setUserEmail(result.data.email);
            window.location.href = routes.home;
        };
    })
    .catch(err => alert('User not found'));
};

export const signUp = async (name, surname, birth, gender, email, password) => {
    await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then( response => response);

    await axios.post(`${databaseURL}/users.json`, {
        name,
        surname,
        birth,
        gender,
        email,
    })
        .then(response => response);

    await signIn(email, password);
};
