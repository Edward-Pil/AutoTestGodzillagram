const assert = require('assert');
const {Builder, By, Key, until} = require('selenium-webdriver');
const locators = require('../locators');
const chalk = require('chalk');

async function runTestCase1(options) {
  console.log(chalk.green("1 Test Started: Checking 'empty fields' error messages when no data provided"));
  driver = await new Builder().forBrowser('chrome') .setChromeOptions(options).build();

  try {
    await driver.get('https://godzilla-front.vercel.app/auth');
    await driver.wait(until.elementLocated(locators.loginInputReg), 5000);

    await driver.findElement(locators.loginInputReg).click();
    await driver.findElement(locators.emailInputReg).click();
    await driver.findElement(locators.passwordInputReg).click();
    await driver.findElement(locators.confirmInputReg).click();
    await driver.findElement(locators.checkPolicyReg).click();
      //await driver.sleep(500);

    //Проверка на ошибку "пустые поля"
    await driver.wait(until.elementLocated(locators.loginErrorReg), 10000);
    assert.strictEqual(await driver.findElement(locators.loginErrorReg).getText(), 'Enter your Username'); 
    assert.strictEqual(await driver.findElement(locators.emailErrorReg).getText(), 'Enter your email');  
    assert.strictEqual(await driver.findElement(locators.passwordErrorReg).getText(), 'Enter your password'); 
    assert.strictEqual(await driver.findElement(locators.confirmationErrorReg).getText(), 'Confirm your password');       
    
    console.log(chalk.cyan('Test Passed'));
  } catch (error) {
    console.error(chalk.red('Test Failed:', error.message));
  } finally {
      //await driver.sleep(500);
    await driver.quit();
  }
};

module.exports = runTestCase1;