const assert = require('assert');
const {Builder, By, Key, until} = require('selenium-webdriver');
const locators = require('../locators');
const chalk = require('chalk');

async function runTestCase4(driver) {
    console.log(chalk.green("4 Test Started: Сhecking error messages for existing users and email"));
    driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://godzilla-front.vercel.app/auth');
        await driver.wait(until.elementLocated(locators.loginInputReg), 5000);
        
        await driver.findElement(locators.loginInputReg).sendKeys('ForAutoTest');
        await driver.findElement(locators.emailInputReg).sendKeys('pilipkoeduard6+10@gmail.com');
        await driver.findElement(locators.passwordInputReg).sendKeys('ASDasd!@#123');
        await driver.findElement(locators.confirmInputReg).sendKeys('ASDasd!@#123');
        await driver.findElement(locators.checkPolicyReg).click();
        await driver.findElement(locators.buttonReg).click();

        //Ожидание сообщения об ошибке.
        await driver.wait(until.elementLocated(By.xpath("//div[@class='input_errorContainer__BXmUh'][1]//p[1]")), 10000);  

        //Проверка текста ошибок.
        assert.strictEqual(await driver.findElement(locators.loginErrorReg).getText(), 'User with this username is already registered');
        assert.strictEqual(await driver.findElement(locators.emailErrorReg).getText(), 'User with this email is already registered'); 
       
    } catch (error) {
        console.error(chalk.red('Test Failed:', error.message));
    } finally {
        //await driver.sleep(3000);
        await driver.quit();
    }
};

module.exports = runTestCase4;