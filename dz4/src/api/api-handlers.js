import firebase from 'firebase/app';
import { dataBaseURL, apiCONFIG } from './api-config';

export const initApi = async () => {
    firebase.initializeApp(apiCONFIG);
};

export const createData = ({ drugName, form, quantity, ['price($)']: price }) => {
    return fetch(
        `${dataBaseURL}/medicine.json`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                drugName,
                form,
                quantity,
                price
            })
        }
    )
        .then( response => response.json() )
        .then( result => console.log(result))
};

export const getMedicine = () => {
    return fetch(
        `${dataBaseURL}/medicine.json`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
};

export const deleteMedicine = ({id}) => {
    return fetch(
        `${dataBaseURL}/medicine/${id}.json`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then( response => response.json() )
};
