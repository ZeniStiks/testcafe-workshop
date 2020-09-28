import { Role } from 'testcafe';
import loginPage from '../pages/login-page';

export const admin = Role('https://www.phptravels.net/admin', async t => {
    await t
        .typeText(loginPage.email, 'admin@phptravels.com', { timeout: 10000})
        .typeText(loginPage.password, 'demoadmin')
        .click(loginPage.submit);
}, { preserveUrl: true });

export const user = Role('https://www.phptravels.net/login', async t => {
    await t
        .typeText(loginPage.userEmailInput, 'user@phptravels.com')
        .typeText(loginPage.password, 'demouser')
        .click(loginPage.submit);
}, { preserveUrl: true });
