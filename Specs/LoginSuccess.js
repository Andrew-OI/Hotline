let LandingPage = require('../PageObjects/LandingPage');
let LoginPage = require('../PageObjects/LoginPage');

describe ('Successful login Hotline', () => {
    it('loging in', async () => {
        await LandingPage.loginLanding(browser.params.url.urla);
        
        await browser.sleep(2000);
        await LoginPage.login(browser.params.login.email, browser.params.login.password);
        
        await browser.sleep(5000);
        expect(await browser.getTitle()).toBe('Hotline - порівняти ціни в інтернет-магазинах України');
        });
          
    });

 //       async function createScreenShotAllure() {
 //           let screenshotFile = await browser.takeScreenshot();
 //          await allure.createAttachment("Screenshot", () => {
 //               return new Buffer(screenshotFile, "base64")
 //           }, 'image/png');
 //       }