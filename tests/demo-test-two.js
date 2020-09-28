import { Selector } from 'testcafe';
import { admin } from '../data/roles';

const logoutbutton = Selector('a').withAttribute('href', 'https://www.phptravels.net/admin/logout');

fixture `Phptravels test`
    .beforeEach( async t => {
        await t
            .useRole(admin);
    });

test('Test logout button visibility', async t => {
    await t
        .expect(logoutbutton.exists).ok()
        .useRole(user)
        .navigateTo('dfdfgdfgd')
});
