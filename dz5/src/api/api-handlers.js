import { databaseURL} from './api.config';

const headers = {
    'Content-Type': 'application/json'
};

export const createUser = ({ userId, name, lastName, email, age, gender }) => {
    fetch(
        `${databaseURL}/users.json`,
        {
            method: 'POST',
            headers,
            body: JSON.stringify({
                userId,
                name,
                lastName,
                email,
                age,
                gender,
            })
        }
    )
        .then( response => response.json());
};

export const getUsers = () => {
    return fetch(
        `${databaseURL}/users.json`,
        {
            method: 'GET',
            headers,
        }
    )
};

export const deleteUser = ({ id }) => {
    return fetch(
        `${databaseURL}/users/${id}.json`,
        {
            method: 'DELETE',
            headers,
        }
    )
        .then( response => response.json() );
};

export const renderUsersInfo = () => {
    const usersData = document.querySelector('.usersData');
    usersData.innerHTML = null;
    getUsers()
        .then( response => response.json() )
        .then( result => {
            if(result) {
                const transformedArr = Object.keys(result).map( id => ({
                    ...result[id],
                    id
                }));
                transformedArr.forEach( item => {
                    const li = document.createElement('li');
                    li.className = 'userItem';
                    li.innerHTML = ` ${item.name} ${item.lastName} /
                        ${item.age} age /
                        ${item.gender} /
                        ${item.email} `;
                    usersData.append(li);
                    li.onclick = () => {
                        deleteUser(item)
                            .then(() => renderUsersInfo());
                    }
                })
            }
        });
};
