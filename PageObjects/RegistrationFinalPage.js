
let BasePage = require("./base.page");
let Button = require("../elements/button.element");

const RADIO_BUTTON_LOCATOR = by.css('#msex');

class RegistrationFinalPage extends BasePage {

    async waitRegistrationFinalPageLoaded() {
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.presenceOf(this.getSaveButtonElement().getProtractorElement()), 15000)
    };

    async pageIsOpened() {
        return await this.getSaveButtonElement().isDisplayed() && await this.getSaveButtonElement().isPresent();
    };
    
    getSaveButtonElement() {
        return new Button(element(RADIO_BUTTON_LOCATOR), "Save button");
    };

};

module.exports = new RegistrationFinalPage ();