const assert = require('assert');
const {Builder, By, Key, until} = require('selenium-webdriver');
const locators = require('../locators');
const chalk = require('chalk');
const hf = require('../helpfunction.js');

async function runTestCase5(driver) {
    console.log(chalk.green("5 Test Started: Checking validations with random data (50 cycles)"));
    driver = await new Builder().forBrowser('chrome').build();

    async function clearField(field) {
        //Очистка полей которая работает
        await driver.findElement(field).sendKeys(Key.CONTROL + "a");
        await driver.findElement(field).sendKeys(Key.BACK_SPACE);
        //await driver.sleep(500);
    }

    try {
        await driver.get('https://godzilla-front.vercel.app/auth');
        await driver.wait(until.elementLocated(locators.loginInputReg), 10000);
        await driver.findElement(locators.checkPolicyReg).click();

        for(let i=0; i<50; i++){
            await driver.wait(until.elementIsEnabled(await driver.findElement(locators.confirmInputReg)), 5000);
            await driver.sleep(100);

            await clearField(locators.loginInputReg);
            await clearField(locators.emailInputReg);
            await clearField(locators.passwordInputReg);
            await clearField(locators.confirmInputReg);
            //await driver.sleep(1000);

            await driver.findElement(locators.loginInputReg).sendKeys(hf.generateRandomUsername(hf.getRandomNumber(6, 30)));
            await driver.findElement(locators.emailInputReg).sendKeys(hf.generateRandomEmail());
            let password=hf.generateRandomPassword(hf.getRandomNumber(6, 20));
            await driver.findElement(locators.passwordInputReg).sendKeys(password);
            await driver.findElement(locators.confirmInputReg).sendKeys(password);

            //await driver.sleep(3000);
            let isButtonEnabled = await driver.findElement(locators.buttonReg).isEnabled();
            assert(isButtonEnabled);

            

            //await driver.sleep(1000);
        }

    } catch (error) {
        console.error(chalk.red('Test Failed:', error.message));
        try { console.error(chalk.red("Username:", await driver.findElement(locators.loginInputReg).getAttribute('value'))); } catch(e) {}
        try { console.error(chalk.red("Email:", await driver.findElement(locators.emailInputReg).getAttribute('value'))); } catch(e) {}
        try { console.error(chalk.red("Password:", await driver.findElement(locators.passwordInputReg).getAttribute('value'))); } catch(e) {}
        try { console.error(chalk.red("Confirm Password:", await driver.findElement(locators.confirmInputReg).getAttribute('value'))); } catch(e) {}
    } finally {
        await driver.quit();
    }
};

module.exports = runTestCase5;