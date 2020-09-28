import { Selector } from 'testcafe';

class LoginPage {
    constructor () {
        this.email =          Selector('input').withAttribute('name', 'email');
        this.password =       Selector('input').withAttribute('name', 'password');
        this.submit =         Selector('button').withAttribute('type', 'submit');
        this.userEmailInput = Selector('input').withAttribute('type', 'email');
    }
}

export default new LoginPage();