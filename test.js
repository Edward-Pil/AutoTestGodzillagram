const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const locators = require('./locators');
const chalk = require('chalk');
const runTestCase1 = require('./TestSuite/testCase1.js');
const runTestCase2 = require('./TestSuite/testCase2.js');
const runTestCase3 = require('./TestSuite/testCase3.js');
const runTestCase4 = require('./TestSuite/testCase4.js');
const runTestCase5 = require('./TestSuite/testCase5.js');

async function runTestSuite() {

    try {
        let options = new chrome.Options();
        // configure the options
        //options.addArguments('headless'); // for headless mode
        //options.addArguments('disable-gpu'); // to disable GPU
        //options.addArguments('no-sandbox'); // for running as root user
        //options.addArguments('disable-dev-shm-usage'); // to improve performance
        //options.addArguments('window-size=1200x600'); // to set browser window size
        //options.setUserPreferences({'profile.default_content_setting_values.notifications': 2}); // to suppress notifications

        let driver = new Builder().forBrowser('chrome')
            .setChromeOptions(options);

        console.log(chalk.magenta('Start Tests'));
        await runTestCase1(options);
        await runTestCase2(options);
        await runTestCase3(options);
        await runTestCase4(options);
        await runTestCase5(options);
        console.log(chalk.magenta('All Tests Passed'));
        //await driver.quit();
    } catch (error) {
        console.error('Error running test suite:', error);
    }
}

runTestSuite();