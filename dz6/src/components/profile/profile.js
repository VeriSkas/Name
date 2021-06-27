import { removeToken, removeUserEmail } from '../../shared/ls-service';
import { routes } from '../../shared/constants/routes';

export const logoutBtnHandler = () => {
    const logOutBtn = document.querySelector('.logOut-btn');

    logOutBtn.onclick = () => {
        window.location.href = routes.home;
        removeToken();
        removeUserEmail();
    };
};

export const sayHelloUser = email => {
    const sayHello_p = document.querySelector('.sayHello_p');
    sayHello_p.innerHTML = `Hello, dear user,  ${email}`;
};
