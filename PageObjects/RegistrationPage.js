
let BasePage = require("./base.page");
let Button = require("../elements/button.element");
let InputForm = require("../elements/input.form");

const EMAIL_INPUTFORM_LOCATOR = by.css('[name="email"]');
const NICKNAME_INPUTFORM_LOCATOR = by.css('[name="login"]');
const PASS_INPUTFORM_LOCATOR = by.css('[name="password"]');
const REGISTER_BUTTON_LOCATOR = by.css('#submit-button');
const RADIO_BUTTON_LOCATOR = by.css('#msex');
const ERROR_LOCATOR = by.css('[name="email"] + .error-field .errors');


class RegistrationPage extends BasePage {

    async RegisterUser(email, nickname, pass, isDataValid=true) {
        await allure.createStep(`Registering user with ${email}/${nickname}/${pass}`, async () => {
            await this.getEmailInputFormElement().sendKeys(email);
            await this.getNicknameInputFormElement().sendKeys(nickname);
            await this.getPasswordInputFormElement().sendKeys(pass);
            await this.getRegisterButtonElement().click();
            if (isDataValid=true) {
                browser.wait(getRegisterSuccessElement(), 5000)
            } else {
                browser.wait(getRegisterUnsuccessElement(), 5000)
            };
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

    getRegisterSuccessElement() {
        return new Button(element(RADIO_BUTTON_LOCATOR), "Save button");
    };

    getRegisterUnsuccessElement() {
        return new Button(element(ERROR_LOCATOR), "Error message")
    };

};

module.exports = new RegistrationPage ();