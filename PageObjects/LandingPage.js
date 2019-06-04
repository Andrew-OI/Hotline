
let BasePage = require("./base.page.js");
let Button = require("../elements/button.element");

const LOGIN_BTN_LOCATOR = by.css('.item-login > a');

class LandingPage extends BasePage {
    async get() {
        await browser.get(browser.params.url.urla);
    }

    async loginButtonClick() {
        await this.getLoginButton().click();
    }
    
    getLoginButton() {
        return new Button(element(LOGIN_BTN_LOCATOR), "Login Button")
    }

}

module.exports = new LandingPage ();