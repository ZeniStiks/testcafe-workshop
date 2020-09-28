import { Selector } from 'testcafe';

class UserLoginPage {
    constructor () {
        this.myAccountDropdown = Selector('.dropdown-login');
        this.loginButton = Selector('a').withExactText('Login');
        this.loginForm = Selector('#loginfrm');
        this.welcomeMessage = Selector('h3').withText('Hi, Demo User');
    }
}

export default new UserLoginPage();