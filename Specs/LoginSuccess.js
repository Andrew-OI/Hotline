
let LandingPage = require('../PageObjects/LandingPage');
let LoginPage = require('../PageObjects/LoginPage');

describe ('Authentication Hotline', () => {
    it('Successful login', async () => {
        await LandingPage.navigateToLogin(browser.params.url.urla); 
        await LoginPage.waitForLoginPageLoaded();      
        await LoginPage.login(browser.params.login.email, browser.params.login.password);
        await LandingPage.waitForPageLoaded();             
        expect(await LandingPage.isUserLoggedIn()).toBe(true, "User logged in");
    });
          
});
