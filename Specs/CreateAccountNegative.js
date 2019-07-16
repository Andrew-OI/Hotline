
let LandingPage = require('../PageObjects/LandingPage');
let LoginPage = require('../PageObjects/LoginPage');
let RegistrationPage = require('../PageObjects/RegistrationPage');

let errorText = RegistrationPage.getRegisterUnsuccessElement();

describe ('CreateAccountNegative', () => {
    it('CreatingAccountNegative', async () => {
        await LandingPage.navigateToLogin(browser.params.url.urla);
        await LoginPage.waitForLoginPageLoaded();
        await LoginPage.clickRegisterButton();
        await RegistrationPage.waitForRegistrationPageLoaded();
        await RegistrationPage.RegisterUser(browser.params.register.invalidemail, browser.params.register.nickname, browser.params.register.pass, false);
        await RegistrationPage.getText()
        expect(errorText.getText()).toBe('Поле не відповідає формату');
    });
});

//[name="email"] + .error-field .errors
//'Поле не відповідає формату'