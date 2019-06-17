
let BasePage = require("./base.page");
let InputForm = require("../elements/input.form");
let Button = require("../elements/button.element");

const EMAIL_INPUT_FORM_LOCATOR = by.css('[name="login"]');
const PASSWORD_INPUT_FORM_LOCATOR = by.css('[name="password"]');
const LOGIN_BUTTON_ENTER_LOCATOR = by.css('[type="submit"]');
const EMAIL_INPUT_LOCATOR = by.css('.field[type="email"]');

class LoginPage extends BasePage {

    async login(email, pass) {
        await allure.createStep(`Login with ${email} / ${pass}`, async () => {
            await this.getEmailInputForm().sendKeys(email);
            await this.getPasswordInputForm().sendKeys(pass);
            await this.getLoginButtonEnter().click();
        })();
    };
      
    async waitForLoginPageLoaded() {
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.presenceOf(this.getEmailInputElement().getProtractorElement()), 15000)
    };
    
    getEmailInputForm() {
        return new InputForm(element(EMAIL_INPUT_FORM_LOCATOR), "Email Input Form");
    };

    getPasswordInputForm() {
        return new InputForm(element(PASSWORD_INPUT_FORM_LOCATOR), "Password Input Form");
    };

    getLoginButtonEnter() {
        return new Button(element(LOGIN_BUTTON_ENTER_LOCATOR), "Login Button Enter");
    };

    getEmailInputElement() {
        return new InputForm(element(EMAIL_INPUT_LOCATOR), "Email Input Form");
    };
    
};
module.exports = new LoginPage ();