
let BasePage = require("./base.page.js");
let InputForm = require("../elements/input.form.js");
let Button = require("../elements/button.element.js");

const EMAIL_INPUT_FORM_LOCATOR = by.css('[name="login"]');
const PASSWORD_INPUT_FORM_LOCATOR = by.css('[name="password"]');
const LOGIN_BUTTON_ENTER_LOCATOR = by.css('[type="submit"]');

class LoginPage extends BasePage {

    async login(email, pass) {
        await allure.createStep(`Login with ${email} / ${pass}`, async () => {
            await this.getEmailInputForm().sendKeys(email);
            await this.getPasswordInputForm().sendKeys(pass);
            await this.getLoginButtonEnter().click();
        });
    }
      
    getEmailInputForm() {
        return new InputForm(element(EMAIL_INPUT_FORM_LOCATOR), "Email Input Form");
    }

    getPasswordInputForm() {
        return new InputForm(element(PASSWORD_INPUT_FORM_LOCATOR), "Password Input Form");
    }

    getLoginButtonEnter() {
        return new Button(element(LOGIN_BUTTON_ENTER_LOCATOR), "Login Button Enter");
    }
    
};
module.exports = new LoginPage ();