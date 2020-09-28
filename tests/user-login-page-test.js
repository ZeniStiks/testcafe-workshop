import UserLoginPage from '../pages/user-login-page';
import { user } from '../data/roles'
import { ClientFunction } from 'testcafe';

const consoleOut = ClientFunction(() => console.log('This message is from client function'));

fixture('User login tests');

test.only('Check if login is opened', async t => {
    await t
        .navigateTo('https://www.phptravels.net/')
        .click(UserLoginPage.myAccountDropdown)
        .click(UserLoginPage.loginButton)
        .expect(UserLoginPage.loginForm.exists).ok();
    console.log('This message is in tc server side');
    await consoleOut();
    await t.debug();
});

test('Check if login is sucessfull', async t => {
    await t
        .useRole(user)
        .expect(UserLoginPage.welcomeMessage.exists).ok()
        .takeScreenshot();
});
