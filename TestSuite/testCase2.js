const assert = require('assert');
const { Builder, By, Key, until } = require('selenium-webdriver');
const locators = require('../locators');
const chalk = require('chalk');

async function runTestCase2(driver) {
    console.log(chalk.green("2 Test Started: Checking Policy Links"));
    driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://godzilla-front.vercel.app/auth');
        await driver.wait(until.elementLocated(locators.TermsReg), 5000);

        await driver.findElement(locators.TermsReg).click();
            //await driver.sleep(500);

        await driver.wait(until.urlContains('https://godzilla-front.vercel.app/auth/terms'), 5000);
        assert.strictEqual(await driver.getCurrentUrl(), 'https://godzilla-front.vercel.app/auth/terms');
    
        await driver.findElement(locators.backAuth).click();
        await driver.findElement(locators.PolicyReg).click();
            //await driver.sleep(500);
      
        await driver.wait(until.urlContains('https://godzilla-front.vercel.app/auth/policy'), 5000);
        assert.strictEqual(await driver.getCurrentUrl(), 'https://godzilla-front.vercel.app/auth/policy');

        await driver.findElement(locators.backAuth).click();

        await driver.wait(until.urlContains('https://godzilla-front.vercel.app/auth'), 5000);
        assert.strictEqual(await driver.getCurrentUrl(), 'https://godzilla-front.vercel.app/auth');

        console.log(chalk.cyan('Test Passed'));
    } catch (error) {
        console.error(chalk.red('Test Failed:', error.message));
    } finally {
        //await driver.sleep(500);
        await driver.quit();
    }
};

module.exports = runTestCase2;