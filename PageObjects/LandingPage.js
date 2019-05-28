class LandingPage {
    constructor () {
        this.loginButton =  element(by.css('.item-login > a'));

    };
        async get() {
        await browser.get(browser.params.url.urla);
    };

    async loginButtonClick() {
        await this.loginButton.click()
    };
    
};
module.exports = new LandingPage ();