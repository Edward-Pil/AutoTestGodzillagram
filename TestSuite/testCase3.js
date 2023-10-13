const assert = require('assert');
const {Builder, By, Key, until} = require('selenium-webdriver');
const locators = require('../locators');
const chalk = require('chalk');

async function runTestCase3(driver) {
    console.log(chalk.green("3 Test Started: Сhecking error messages for length and invalid characters"));
    driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://godzilla-front.vercel.app/auth');
        await driver.wait(until.elementLocated(locators.loginInputReg), 5000);
        
        await driver.findElement(locators.loginInputReg).sendKeys('a');
        await driver.findElement(locators.emailInputReg).sendKeys('a');
        await driver.findElement(locators.passwordInputReg).sendKeys('a');

        await driver.wait(until.elementLocated(locators.passwordInputReg), 5000);
        await driver.findElement(locators.checkPolicyReg).click();

        assert.strictEqual(await driver.findElement(locators.loginErrorReg).getText(), 'Username must be at least 6 characters');
        assert.strictEqual(await driver.findElement(locators.emailErrorReg).getText(), 'The email must match the format example@example.com'); 
        assert.strictEqual(await driver.findElement(locators.passwordErrorReg).getText(), 'Password must be at least 6 characters'); 
        assert.strictEqual(await driver.findElement(locators.confirmationErrorReg).getText(), 'The passwords must match');

        await driver.findElement(locators.loginInputReg).sendKeys('@');
        await driver.findElement(locators.passwordInputReg).sendKeys('asdasdd');
        
        await driver.wait(until.elementLocated(locators.passwordInputReg), 5000);
        await driver.findElement(locators.checkPolicyReg).click();

        assert.strictEqual(await driver.findElement(locators.loginErrorReg).getText(), 'Username can contain 1-9, a-z, A-Z, . _ -');
        assert.strictEqual(await driver.findElement(locators.passwordErrorReg).getText(), 'Password must contain 1-9, a-z, A-Z, ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _` { | } ~'); 

        await driver.findElement(locators.loginInputReg).clear();
        await driver.findElement(locators.passwordInputReg).clear();
        await driver.findElement(locators.loginInputReg).sendKeys('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        await driver.findElement(locators.passwordInputReg).sendKeys('ASDasd!@#123aa');
        await driver.wait(until.elementLocated(locators.passwordInputReg), 5000);
        await driver.findElement(locators.checkPolicyReg).click();

        assert.strictEqual(await driver.findElement(locators.loginErrorReg).getText(), 'Maximum number of characters is 30');
        assert.strictEqual(await driver.findElement(locators.passwordErrorReg).getText(), 'Maximum number of characters is 20'); 

    console.log(chalk.cyan('Test Passed'));
    } catch (error) {
        console.error(chalk.red('Test Failed:', error.message));
    } finally {
        //await driver.sleep(3000);
        await driver.quit();
    }
};

module.exports = runTestCase3;