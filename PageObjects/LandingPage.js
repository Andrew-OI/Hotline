
let BasePage = require("./base.page.js");
let Button = require("../elements/button.element");

const LOGIN_BTN_LOCATOR = by.css('.item-login > a');

class LandingPage extends BasePage {
    
    async navigateToLogin(browserUrl) {
        await allure.createStep(`Click on the Login button on the Landing page`, async () => {
            await browser.get(browserUrl);
            await this.getLoginButton().click();
        })();
    }

    getLoginButton() {
        return new Button(element(LOGIN_BTN_LOCATOR), "Login Button")
    }

}

module.exports = new LandingPage ();