
let BasePage = require("./base.page");
let Button = require("../elements/button.element");
let InputForm = require("../elements/input.form");

const EMAIL_INPUTFORM_LOCATOR = by.css('[name="email"]');
const NICKNAME_INPUTFORM_LOCATOR = by.css('[name="login"]');
const PASS_INPUTFORM_LOCATOR = by.css('[name="password"]');
const REGISTER_BUTTON_LOCATOR = by.css('#submit-button');


class RegistrationPage extends BasePage {

    async RegisterUser(email, nickname, pass) {
        await allure.createStep(`Registering user with ${email}/${nickname}/${pass}`, async () => {
            await this.getEmailInputFormElement().sendKeys(email);
            await this.getNicknameInputFormElement().sendKeys(nickname);
            await this.getPasswordInputFormElement().sendKeys(pass);
            await this.getRegisterButtonElement().click();
        })();
    };

    async waitForRegistrationPageLoaded() {
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.presenceOf(this.getEmailInputFormElement().getProtractorElement()), 15000)
    };

    getEmailInputFormElement() {
        return new InputForm(element(EMAIL_INPUTFORM_LOCATOR), "Email Input Form");
    };

    getNicknameInputFormElement() {
        return new InputForm(element(NICKNAME_INPUTFORM_LOCATOR), "Nickname Input Form");
    };

    getPasswordInputFormElement() {
        return new InputForm(element(PASS_INPUTFORM_LOCATOR), "Password Input Form");
    };

    getRegisterButtonElement() {
        return new Button(element(REGISTER_BUTTON_LOCATOR), "Register button");
    };

};

module.exports = new RegistrationPage ();