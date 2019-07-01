exports.config = {
    framework: 'jasmine',
    maxInstances: 1,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    params: {
      login: {
        email: 'andriy.oprofat@eleks.com',
        nickName: 'andriyqa77',
        password: 'QAa77'
      },
      url: {
        urla: 'https://hotline.ua/'
      },
      register: {
        email: 'jimbo2382@gmail.com',
        nickname: 'jimbo8232',
        pass: '22jimbo'
      },
    },
    specs: ['Specs/*.js'],
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: ["--window-size=1920,1080"]
      }
    },
  
    SELENIUM_PROMISE_MANAGER: false,
  
    onPrepare: async () => {
      console.log('Let`s start!')
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
        resultDir: 'allure-results'
      })),
      jasmine.getEnv().beforeAll(async () => {
        await browser.restart();
        browser.waitForAngularEnabled(false);
        browser.manage().timeouts().implicitlyWait(5000);
      });
      jasmine.getEnv().afterEach(async () => {
        await createScreenShotAllure();
      });
    }
}

      async function createScreenShotAllure() {
          let screenshotFile = await browser.takeScreenshot();
          await allure.createAttachment("Screenshot", () => {
            return new Buffer.from(screenshotFile, "base64")
          }, 'image/png')();
      }