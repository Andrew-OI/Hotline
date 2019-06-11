exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    params: {
      login: {
        email: 'andriy.oprofat@eleks.com',
        nickName: 'andriyqa77',
        password: 'QAa77'
      },
      url: {
        urla: 'https://hotline.ua/'
      }
    },
    specs: ['Specs/LoginSuccess.js'],
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: ["--window-size=1920,1080"]
      }
    },
  
    SELENIUM_PROMISE_MANAGER: false,
  
    onPrepare: async () => {
      browser.waitForAngularEnabled(false),
      console.log('Let`s start!')
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
        resultDir: 'allure-results'
      })),
      jasmine.getEnv().afterEach(async () => {
        await createScreenShotAllure();
      });
    }
}

      async function createScreenShotAllure() {
          let screenshotFile = await browser.takeScreenshot();
          await allure.createAttachment("Screenshot", () => {
            return new Buffer(screenshotFile, "base64")
          }, 'image/png')();
      }