import { routes, paths } from './shared/constants/routes';
import { signInHandler } from './components/sign-in/sign-in';
import { getToken, getUserEmail } from './shared/ls-service';
import { logoutBtnHandler, sayHelloUser } from './components/profile/profile';
import { signUpHandler } from './components/sign-up/sign-up';


window.onload = () => {
    const pathName = Object.values(paths).find( path => (path === window.location.pathname));

    switch (pathName) {
        case paths.home:
            const token = getToken();
            const userEmail = getUserEmail();

            if(!token) {
                window.location.href = routes.sign_in;
            } else {
                logoutBtnHandler();
                sayHelloUser(userEmail);
            };

            break;

        case paths.sign_in:
            signInHandler();
            break;

        case paths.sign_up:
            signUpHandler();
            break;
    };
};
