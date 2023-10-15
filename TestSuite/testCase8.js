const assert = require('assert');
const {Builder, By, Key, until} = require('selenium-webdriver');
const locators = require('../locators');
const chalk = require('chalk');

async function runTestCase8(options) {
    console.log(chalk.green("8 Test Started: Check for the first login in profile"));
    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();


    try {
        await driver.get('https://godzilla-front.vercel.app/auth/login');
        await driver.wait(until.elementLocated(locators.passwordInputLog), 10000);

            await driver.wait(until.elementIsEnabled(await driver.findElement(locators.passwordInputLog)), 5000);
                //await driver.sleep(100);

            await driver.findElement(locators.emailInputLog).sendKeys("pilipkoeduard6+10@gmail.com");
            await driver.findElement(locators.passwordInputLog).sendKeys("ASDasd!@#123");

            await driver.findElement(locators.buttonLog).click();

                //await driver.sleep(5000);

            await driver.wait(until.urlContains('https://godzilla-front.vercel.app/profile/settings'), 10000);
            assert.strictEqual(await driver.getCurrentUrl(), 'https://godzilla-front.vercel.app/profile/settings');           

                //await driver.sleep(3000);
        console.log(chalk.cyan('Test Passed'));
    } catch (error) {
        console.error(chalk.red('Test Failed:', error.message));
    } finally {
        await driver.quit();
    }
};

module.exports = runTestCase8;