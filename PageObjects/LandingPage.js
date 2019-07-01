
let BasePage = require("./base.page");
let Button = require("../elements/button.element");
let TextBox = require("../elements/textBox.element");
let InputForm = require("../elements/input.form");

const LOGIN_BTN_LOCATOR = by.css('.item-login > a');
const USERNAME_LOCATOR = by.css('.item-login > .name');
const SEARCH_LOCATOR = by.css('#searchbox');

class LandingPage extends BasePage {
    
    async navigateToLogin(browserUrl) {
        await allure.createStep(`Click on the Login button on the Landing page`, async () => {
            await browser.get(browserUrl);
            await this.waitForPageLoaded();
            this.getLoginButtonElement().click();
        })();
    };

    async waitForPageLoaded() {
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.presenceOf(this.getSearchElement().getProtractorElement()), 15000)
    };

    async isUserLoggedIn() {
        return await this.getUsernameElement().isDisplayed() && await this.getUsernameElement().isPresent();
    };

    getUsernameElement() {
        return new TextBox(element(USERNAME_LOCATOR), "Username")
    };

    getLoginButtonElement() {
        return new Button(element(LOGIN_BTN_LOCATOR), "Login Button")
    };

    getSearchElement() {
        return new InputForm(element(SEARCH_LOCATOR), "Search")
    };


}

module.exports = new LandingPage ();