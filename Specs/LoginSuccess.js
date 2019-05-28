let LandingPage = require('../PageObjects/LandingPage');
let LoginPage = require('../PageObjects/LoginPage');

describe ('Succussful login Hotline', function() {
    it('loging in', async function() {
        await LandingPage.get();
        await LandingPage.loginButtonClick();
        
        await browser.sleep(2000);
        await LoginPage.loginEmailSendKeys(browser.params.login.email);
        await LoginPage.loginPasswordSendKeys(browser.params.login.password);
        await LoginPage.loginButtonClick2();

        await browser.sleep(5000);
        expect(await browser.getTitle()).toBe('Hotline - порівняти ціни в інтернет-магазинах України');

    });
});