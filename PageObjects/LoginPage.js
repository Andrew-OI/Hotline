class LoginPage {
    constructor () {
        this.loginEmailInput = element(by.css('[name="login"]'));
        this.loginPassword = element(by.css('[name="password"]'));
        this.loginButton2 = element(by.css('[type="submit"]'));
    };
        
    async loginEmailSendKeys(value) {
        await this.loginEmailInput.sendKeys(value);
        
    };

    async loginPasswordSendKeys(value) {
        await this.loginPassword.sendKeys(value);
    };

    async loginButtonClick2() {
        await this.loginButton2.click();
    }
    
};
module.exports = new LoginPage ();