import { Role } from 'testcafe';
import loginPage from '../pages/login-page';

export const admin = Role('https://www.phptravels.net/admin', async t => {
    await t
        .typeText(loginPage.email, 'admin@phptravels.com')
        .typeText(loginPage.password, 'demoadmin')
        .click(loginPage.submit);
}, { preserveUrl: true });
