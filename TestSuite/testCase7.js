const assert = require('assert');
const {Builder, By, Key, until} = require('selenium-webdriver');
const locators = require('../locators');
const chalk = require('chalk');
const hf = require('../helpfunction.js');

async function runTestCase7(options) {
    console.log(chalk.green("7 Test Started: Login check with random data (10 cycles))"));
    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    async function clearField(field) {
        //Очистка полей которая работает
        await driver.findElement(field).sendKeys(Key.CONTROL + "a");
        await driver.findElement(field).sendKeys(Key.BACK_SPACE);
        //await driver.sleep(500);
    }
    

    try {
        await driver.get('https://godzilla-front.vercel.app/auth/login');
        await driver.wait(until.elementLocated(locators.passwordInputLog), 10000);

        for(let i=0; i<10; i++){
            await driver.wait(until.elementIsEnabled(await driver.findElement(locators.passwordInputLog)), 5000);
                //await driver.sleep(100);

            await clearField(locators.emailInputLog);
            await clearField(locators.passwordInputLog);
                //await driver.sleep(1000);

            await driver.findElement(locators.emailInputLog).sendKeys(hf.generateRandomEmail());
            await driver.findElement(locators.passwordInputLog).sendKeys(hf.generateRandomPassword(hf.getRandomNumber(6, 20)));

            await driver.findElement(locators.buttonLog).click();

                //await driver.sleep(5000);

            await driver.wait(until.elementLocated(locators.passwordErrorLog), 5000);

            assert.strictEqual(await driver.findElement(locators.passwordErrorLog).getText(), 'The email or password are incorrect. Try again please');            

                //await driver.sleep(3000);
        }
        console.log(chalk.cyan('Test Passed'));
    } catch (error) {
        console.error(chalk.red('Test Failed:', error.message));
        try { console.error(chalk.red("Email:", await driver.findElement(locators.emailInputLog).getAttribute('value'))); } catch(e) {}
        try { console.error(chalk.red("Password:", await driver.findElement(locators.passwordErrorLog).getAttribute('value'))); } catch(e) {}
    } finally {
        await driver.quit();
    }
};

module.exports = runTestCase7;