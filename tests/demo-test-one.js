import { Selector } from 'testcafe';

const adminLoginButton =    Selector('a').withAttribute('href', 'https://phptravels.com/order/');
const pricingTitle =        Selector('p').withText('Onetime payment and lifetimes free updates');

fixture `Phptravels test`
    .page `https://phptravels.com/demo/`
    .before( async t => {
        //t.ctx.test = 15;
    });

test('Test to open phptravels pricing', async t => {
    await t
        .click(adminLoginButton)
        .expect(pricingTitle.exists).ok('Pricing title is visible');
    //console.log(t.ctx.test);
    //t.ctx.test = 20;
});

test('Test to validate title text', async t => {
    await t
        .click(adminLoginButton)
        .expect(pricingTitle.innerText).contains('payment', 'Title contains text `payment`');
    //console.log(t.ctx.test);
});
