import { Selector } from 'testcafe';

class LoginPage {
    constructor () {
        this.email =    Selector('input').withAttribute('name', 'email');
        this.password = Selector('input').withAttribute('name', 'password');
        this.submit =   Selector('button').withAttribute('type', 'submit');
    }
}

export default new LoginPage();