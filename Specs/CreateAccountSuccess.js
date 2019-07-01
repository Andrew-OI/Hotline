
let LandingPage = require('../PageObjects/LandingPage');
let LoginPage = require('../PageObjects/LoginPage');
let RegistrationPage = require('../PageObjects/RegistrationPage');
let RegistrationFinalPage = require('../PageObjects/RegistrationFinalPage');

describe ('CreateAccountSuccess', () => {
    it('CreatingAccount', async () => {
        await LandingPage.navigateToLogin(browser.params.url.urla);
        await LoginPage.waitForLoginPageLoaded();
        await LoginPage.clickRegisterButton();
        await RegistrationPage.waitForRegistrationPageLoaded();
        await RegistrationPage.RegisterUser(browser.params.register.email, browser.params.register.nickname, browser.params.register.pass);
        await RegistrationFinalPage.waitRegistrationFinalPageLoaded();
        expect(await RegistrationFinalPage.pageIsOpened()).toBe(true, "Registration Final Page is opened");
    });
});