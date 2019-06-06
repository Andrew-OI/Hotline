let LandingPage = require('../PageObjects/LandingPage');
let LoginPage = require('../PageObjects/LoginPage');

describe ('Succussful login Hotline', () => {
    it('loging in', async () => {
        allure.createStep('step 1', async () => {
            await LandingPage.get();
            await LandingPage.loginButtonClick();
        })();

        allure.createStep('step 2', async () => {
        await browser.sleep(2000);
        await LoginPage.loginEmailSendKeys(browser.params.login.email);
        await LoginPage.loginPasswordSendKeys(browser.params.login.password);
        await LoginPage.loginButtonEnter();
        await browser.sleep(5000);
        expect(await browser.getTitle()).toBe('Hotline - порівняти ціни в інтернет-магазинах України');
        })();
        
        

        async function createScreenShotAllure() {
            let screenshotFile = await browser.takeScreenshot();
            await allure.createAttachment("Screenshot", () => {
                return new Buffer(screenshotFile, "base64")
            }, 'image/png')();
        }
    });
});