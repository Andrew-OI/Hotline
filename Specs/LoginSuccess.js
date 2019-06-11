let LandingPage = require('../PageObjects/LandingPage');
let LoginPage = require('../PageObjects/LoginPage');

describe ('Successful login Hotline', () => {
    it('loging in', async () => {
        await LandingPage.navigateToLogin(browser.params.url.urla);          
        await LoginPage.login(browser.params.login.email, browser.params.login.password);               
        expect(await browser.getTitle()).toBe('Hotline - порівняти ціни в інтернет-магазинах України');
        });
          
    });
